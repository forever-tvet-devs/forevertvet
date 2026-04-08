"use client"

import { useState, useMemo } from "react"
import { MagnifyingGlass, Plus } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export interface ListItem {
  id: string
  label: string
  subtitle?: string
  status?: "published" | "draft" | "archived"
}

interface ItemListPanelProps {
  items: ListItem[]
  selectedId?: string | null
  onSelect: (id: string) => void
  onAdd?: () => void
  addLabel?: string
  reorderable?: boolean
  onReorder?: (oldIndex: number, newIndex: number) => void
  searchable?: boolean
}

export function ItemListPanel({
  items,
  selectedId,
  onSelect,
  onAdd,
  addLabel = "Add new",
  reorderable = false,
  onReorder,
  searchable = true,
}: ItemListPanelProps) {
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    if (!search.trim()) return items
    const q = search.toLowerCase()
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.subtitle?.toLowerCase().includes(q)
    )
  }, [items, search])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id || !onReorder) return
    const oldIndex = items.findIndex((i) => i.id === active.id)
    const newIndex = items.findIndex((i) => i.id === over.id)
    if (oldIndex !== -1 && newIndex !== -1) {
      onReorder(oldIndex, newIndex)
    }
  }

  const listContent = (
    <div className="flex-1 overflow-auto">
      {filtered.length === 0 ? (
        <div className="px-4 py-8 text-center">
          <p className="text-sm text-slate-400">
            {search.trim() ? "No items match your search" : "No items yet"}
          </p>
        </div>
      ) : (
        filtered.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            selected={item.id === selectedId}
            onSelect={() => onSelect(item.id)}
            sortable={false}
          />
        ))
      )}
    </div>
  )

  const sortableContent = (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={filtered.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex-1 overflow-auto">
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-slate-400">
                {search.trim() ? "No items match your search" : "No items yet"}
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <SortableItemRow
                key={item.id}
                item={item}
                selected={item.id === selectedId}
                onSelect={() => onSelect(item.id)}
              />
            ))
          )}
        </div>
      </SortableContext>
    </DndContext>
  )

  return (
    <div className="flex flex-col h-full">
      {/* Header: search + add */}
      <div className="flex items-center gap-2 px-3 py-3 border-b border-slate-100 shrink-0">
        {searchable && (
          <div className="relative flex-1">
            <MagnifyingGlass
              size={15}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full h-8 pl-8 pr-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        )}
        {onAdd && (
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex items-center gap-1 px-3 h-8 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors shrink-0 cursor-pointer"
          >
            <Plus size={14} weight="bold" />
            <span className="hidden sm:inline">{addLabel}</span>
          </button>
        )}
      </div>

      {/* List */}
      {reorderable && onReorder ? sortableContent : listContent}
    </div>
  )
}

/* ── Row sub-components ─────────────────────────────────── */

const statusDotColors: Record<string, string> = {
  published: "bg-emerald-500",
  draft: "bg-amber-500",
  archived: "bg-slate-400",
}

function ItemRow({
  item,
  selected,
  onSelect,
  sortable: _sortable,
  style,
  ...dragProps
}: {
  item: ListItem
  selected: boolean
  onSelect: () => void
  sortable: boolean
  style?: React.CSSProperties
} & Record<string, unknown>) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={style}
      className={cn(
        "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors border-l-2 cursor-pointer",
        selected
          ? "bg-primary/5 border-l-primary"
          : "border-l-transparent hover:bg-slate-50"
      )}
      {...dragProps}
    >
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-medium truncate",
            selected ? "text-primary" : "text-slate-800"
          )}
        >
          {item.label}
        </p>
        {item.subtitle && (
          <p className="text-xs text-slate-400 truncate mt-0.5">
            {item.subtitle}
          </p>
        )}
      </div>
      {item.status && (
        <span
          className={cn(
            "size-2 rounded-full mt-1.5 shrink-0",
            statusDotColors[item.status] || "bg-slate-300"
          )}
        />
      )}
    </button>
  )
}

function SortableItemRow({
  item,
  selected,
  onSelect,
}: {
  item: ListItem
  selected: boolean
  onSelect: () => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: "relative" as const,
    zIndex: isDragging ? 50 : undefined,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ItemRow
        item={item}
        selected={selected}
        onSelect={onSelect}
        sortable={true}
      />
    </div>
  )
}
