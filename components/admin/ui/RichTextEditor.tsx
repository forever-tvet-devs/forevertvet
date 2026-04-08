"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import Placeholder from "@tiptap/extension-placeholder"
import Highlight from "@tiptap/extension-highlight"
import Image from "@tiptap/extension-image"
import { useCallback } from "react"
import {
  ArrowUUpLeft,
  ArrowUUpRight,
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  ListBullets,
  ListNumbers,
  Quotes,
  CodeBlock,
  LinkSimple,
  Minus,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

interface RichTextEditorProps {
  defaultValue?: string
  onChange?: (html: string) => void
  placeholder?: string
}

export function RichTextEditor({
  defaultValue = "",
  onChange,
  placeholder = "Start writing...",
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-primary underline" },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder }),
      Highlight,
      Image,
    ],
    content: defaultValue,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "outline-none min-h-[200px] px-4 py-3",
      },
    },
  })

  const setLink = useCallback(() => {
    if (!editor) return
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("Enter URL", previousUrl || "https://")
    if (url === null) return
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  if (!editor) return null

  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-slate-200 bg-slate-50">
        {/* Undo / Redo */}
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <ArrowUUpLeft size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <ArrowUUpRight size={16} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Heading select */}
        <select
          value={
            editor.isActive("heading", { level: 1 })
              ? "h1"
              : editor.isActive("heading", { level: 2 })
                ? "h2"
                : editor.isActive("heading", { level: 3 })
                  ? "h3"
                  : "p"
          }
          onChange={(e) => {
            const val = e.target.value
            if (val === "p") {
              editor.chain().focus().setParagraph().run()
            } else {
              const level = parseInt(val.replace("h", "")) as 1 | 2 | 3
              editor.chain().focus().toggleHeading({ level }).run()
            }
          }}
          className="h-7 px-2 rounded text-xs font-medium text-slate-600 bg-white border border-slate-200 outline-none cursor-pointer"
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>

        <ToolbarDivider />

        {/* Inline formatting */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="Bold"
        >
          <TextB size={16} weight="bold" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="Italic"
        >
          <TextItalic size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          title="Underline"
        >
          <TextUnderline size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          title="Strikethrough"
        >
          <TextStrikethrough size={16} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Text alignment */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
          title="Align left"
        >
          <TextAlignLeft size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
          title="Align center"
        >
          <TextAlignCenter size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
          title="Align right"
        >
          <TextAlignRight size={16} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Lists */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="Bullet list"
        >
          <ListBullets size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="Ordered list"
        >
          <ListNumbers size={16} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Block elements */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          title="Blockquote"
        >
          <Quotes size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive("codeBlock")}
          title="Code block"
        >
          <CodeBlock size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Horizontal rule"
        >
          <Minus size={16} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Link */}
        <ToolbarButton
          onClick={setLink}
          active={editor.isActive("link")}
          title="Insert link"
        >
          <LinkSimple size={16} />
        </ToolbarButton>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} className="admin-rte-content text-sm text-slate-800" />

      {/* Tiptap content styles */}
      <style>{`
        .admin-rte-content .tiptap {
          outline: none;
          min-height: 200px;
          padding: 1rem;
        }
        .admin-rte-content .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #94a3b8;
          pointer-events: none;
          height: 0;
        }
        .admin-rte-content .tiptap h1 {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .admin-rte-content .tiptap h2 {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.3;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .admin-rte-content .tiptap h3 {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.4;
          margin-top: 1rem;
          margin-bottom: 0.375rem;
        }
        .admin-rte-content .tiptap p {
          margin-bottom: 0.5rem;
        }
        .admin-rte-content .tiptap ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .admin-rte-content .tiptap ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .admin-rte-content .tiptap li {
          margin-bottom: 0.25rem;
        }
        .admin-rte-content .tiptap blockquote {
          border-left: 3px solid #214B82;
          padding-left: 1rem;
          color: #475569;
          font-style: italic;
          margin: 0.75rem 0;
        }
        .admin-rte-content .tiptap pre {
          background: #f1f5f9;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-family: ui-monospace, monospace;
          font-size: 0.875rem;
          overflow-x: auto;
          margin: 0.75rem 0;
        }
        .admin-rte-content .tiptap code {
          background: #f1f5f9;
          border-radius: 0.25rem;
          padding: 0.125rem 0.25rem;
          font-family: ui-monospace, monospace;
          font-size: 0.875em;
        }
        .admin-rte-content .tiptap a {
          color: #214B82;
          text-decoration: underline;
        }
        .admin-rte-content .tiptap hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 1rem 0;
        }
        .admin-rte-content .tiptap img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  )
}

/* ── Toolbar sub-components ─────────────────────────────────── */

function ToolbarButton({
  children,
  onClick,
  active = false,
  disabled = false,
  title,
}: {
  children: React.ReactNode
  onClick: () => void
  active?: boolean
  disabled?: boolean
  title?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "inline-flex items-center justify-center size-7 rounded transition-colors cursor-pointer",
        active
          ? "bg-primary/10 text-primary"
          : "text-slate-500 hover:bg-slate-200 hover:text-slate-700",
        disabled && "opacity-40 pointer-events-none"
      )}
    >
      {children}
    </button>
  )
}

function ToolbarDivider() {
  return <div className="w-px h-5 bg-slate-200 mx-1 shrink-0" />
}
