interface PropDefinition {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

interface PropsTableProps {
  props: PropDefinition[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border bg-muted/50">
          <tr>
            <th className="px-4 py-3 font-medium">Prop</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Default</th>
            <th className="px-4 py-3 font-medium">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  {prop.name}
                  {prop.required && <span className="ml-1 text-red-500">*</span>}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {prop.default ? (
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{prop.default}</code>
                ) : (
                  "-"
                )}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
