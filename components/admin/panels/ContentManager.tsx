"use client"

import { useState, useCallback, type ReactNode } from "react"
import { Notepad } from "@phosphor-icons/react"
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader"
import { TwoPanelLayout } from "@/components/admin/panels/TwoPanelLayout"
import { ItemListPanel, type ListItem } from "@/components/admin/panels/ItemListPanel"
import { FormPanel } from "@/components/admin/panels/FormPanel"
import { EmptyPanelState } from "@/components/admin/panels/EmptyPanelState"

type ContentStatus = "published" | "draft" | "archived"

export interface ContentItem extends ListItem {
  updatedAt?: string
  updatedBy?: string
  [key: string]: unknown
}

interface ContentManagerProps {
  title: string
  description: string
  items: ContentItem[]
  addLabel?: string
  renderForm: (
    item: ContentItem,
    onChange: (updated: Partial<ContentItem>) => void
  ) => ReactNode
  onCreateItem?: () => ContentItem
  onSaveItem?: (item: ContentItem) => void | Promise<void>
  onDeleteItem?: (id: string) => void | Promise<void>
  onStatusChangeItem?: (id: string, status: ContentStatus) => void
  reorderable?: boolean
  onReorder?: (oldIndex: number, newIndex: number) => void
}

export function ContentManager({
  title,
  description,
  items,
  addLabel = "Add new",
  renderForm,
  onCreateItem,
  onSaveItem,
  onDeleteItem,
  onStatusChangeItem,
  reorderable = false,
  onReorder,
}: ContentManagerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [activePanel, setActivePanel] = useState<"list" | "detail">("list")
  const [saving, setSaving] = useState(false)
  const [localEdits, setLocalEdits] = useState<Partial<ContentItem>>({})

  const selectedItem = items.find((i) => i.id === selectedId) ?? null
  const editedItem = selectedItem
    ? { ...selectedItem, ...localEdits }
    : null

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id)
    setLocalEdits({})
    setActivePanel("detail")
  }, [])

  const handleAdd = useCallback(() => {
    if (!onCreateItem) return
    const newItem = onCreateItem()
    setSelectedId(newItem.id)
    setLocalEdits({})
    setActivePanel("detail")
  }, [onCreateItem])

  const handleBack = useCallback(() => {
    setActivePanel("list")
  }, [])

  const handleFieldChange = useCallback(
    (updated: Partial<ContentItem>) => {
      setLocalEdits((prev) => ({ ...prev, ...updated }))
    },
    []
  )

  const handleSave = useCallback(async () => {
    if (!editedItem || !onSaveItem) return
    setSaving(true)
    try {
      await onSaveItem(editedItem as ContentItem)
      setLocalEdits({})
    } finally {
      setSaving(false)
    }
  }, [editedItem, onSaveItem])

  const handleDelete = useCallback(async () => {
    if (!selectedId || !onDeleteItem) return
    await onDeleteItem(selectedId)
    setSelectedId(null)
    setLocalEdits({})
    setActivePanel("list")
  }, [selectedId, onDeleteItem])

  const handleStatusChange = useCallback(
    (status: ContentStatus) => {
      if (!selectedId) return
      onStatusChangeItem?.(selectedId, status)
    },
    [selectedId, onStatusChangeItem]
  )

  const listPanel = (
    <ItemListPanel
      items={items}
      selectedId={selectedId}
      onSelect={handleSelect}
      onAdd={onCreateItem ? handleAdd : undefined}
      addLabel={addLabel}
      reorderable={reorderable}
      onReorder={onReorder}
    />
  )

  const detailPanel = editedItem ? (
    <FormPanel
      label={editedItem.label}
      status={(editedItem.status as ContentStatus) ?? "draft"}
      updatedAt={editedItem.updatedAt as string | undefined}
      updatedBy={editedItem.updatedBy as string | undefined}
      onStatusChange={onStatusChangeItem ? handleStatusChange : undefined}
      onSave={onSaveItem ? handleSave : undefined}
      onDelete={onDeleteItem ? handleDelete : undefined}
      saving={saving}
    >
      {renderForm(editedItem as ContentItem, handleFieldChange)}
    </FormPanel>
  ) : (
    <EmptyPanelState
      icon={<Notepad size={48} weight="thin" />}
      title="No item selected"
      description="Select an item from the list or create a new one to get started."
    />
  )

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="shrink-0">
        <AdminPageHeader title={title} description={description} />
      </div>
      <TwoPanelLayout
        listPanel={listPanel}
        detailPanel={detailPanel}
        activePanel={activePanel}
        onBack={handleBack}
      />
    </div>
  )
}
