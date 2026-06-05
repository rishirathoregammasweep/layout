import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon, FilterIcon, Search01Icon } from "@hugeicons/core-free-icons"

import { DataModelsTable } from "./components"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

export default function DataModelsPage() {
    return (
        <div className="max-w-4xl space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-tight">Existing objects</h2>
                    <div className="flex gap-2">
                    <InputGroup className="min-w-lg">
                        <InputGroupInput placeholder="Search for an object..." />
                        <InputGroupAddon>
                            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button variant={'secondary'} size={'icon'}>
                        <HugeiconsIcon icon={FilterIcon} strokeWidth={2} />
                    </Button>
                    </div>
                </div>
                <Button size="sm" variant={'secondary'}>
                    <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
                    New model
                </Button>
            </div>
            <DataModelsTable />
        </div>
    )
}
