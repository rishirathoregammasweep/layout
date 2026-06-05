import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { Separator } from "@/components/ui/separator"

export default function GeneralSettingsPage() {
  return (
    <div className="max-w-xl ">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Workspace Information</FieldLegend>
          <FieldDescription>
            Configure your workspace information
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                Workspace Name
              </FieldLabel>
              <Input
                id="checkout-7j9-card-name-43j"
                placeholder="My Workspace"
                value="My Workspace"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                Workspace Domain
              </FieldLabel>
              <Input
                id="checkout-7j9-card-number-uw1"
                placeholder="my-workspace.com"
                value="my-workspace.com"
                required
              />
              <FieldDescription>
                Enter your 16-digit card number
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-optional-comments">
                Workspace Description
              </FieldLabel>
              <Textarea
                value="My Workspace Description"
                id="checkout-7j9-optional-comments"
                placeholder="Add any additional comments"
                className="resize-none"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Field>
      </FieldGroup>


      <Separator className="my-8" />

      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-sm font-medium">Formats</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Configure date, time, number, timezone, and calendar start day
          </p>
        </div>

        <div className="max-w-xl space-y-5">
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs font-medium" htmlFor="tz">
              Time zone
            </label>
            <Select defaultValue="ist">
              <SelectTrigger id="tz" className="h-10 w-full rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="min-w-[var(--radix-select-trigger-width)]">
                <SelectItem value="ist">
                  System settings · (GMT+05:30) India Standard Time — Kolkata
                </SelectItem>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">Eastern Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-muted-foreground text-xs font-medium" htmlFor="df">
              Date format
            </label>
            <Select defaultValue="sys-date">
              <SelectTrigger id="df" className="h-10 w-full rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="min-w-[var(--radix-select-trigger-width)]">
                <SelectItem value="sys-date">System settings · Apr 26, 2026</SelectItem>
                <SelectItem value="iso">2026-04-26</SelectItem>
                <SelectItem value="eu">26/04/2026</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-muted-foreground text-xs font-medium" htmlFor="tf">
              Time format
            </label>
            <Select defaultValue="sys-time">
              <SelectTrigger id="tf" className="h-10 w-full rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="min-w-[var(--radix-select-trigger-width)]">
                <SelectItem value="sys-time">System settings · 5:08 PM</SelectItem>
                <SelectItem value="24">17:08</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-muted-foreground text-xs font-medium" htmlFor="nf">
              Number format
            </label>
            <Select defaultValue="sys-num">
              <SelectTrigger id="nf" className="h-10 w-full rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="min-w-[var(--radix-select-trigger-width)]">
                <SelectItem value="sys-num">System settings · 1,234.56</SelectItem>
                <SelectItem value="eu-num">1.234,56</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-muted-foreground text-xs font-medium" htmlFor="csd">
              Calendar start day
            </label>
            <Select defaultValue="sun">
              <SelectTrigger id="csd" className="h-10 w-full rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="min-w-[var(--radix-select-trigger-width)]">
                <SelectItem value="sun">System settings · Sunday</SelectItem>
                <SelectItem value="mon">Monday</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </div>
  )
}
