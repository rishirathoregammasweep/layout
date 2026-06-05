import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Separator } from "@/components/ui/separator"

export default function IntegrationsSettingsPage() {
  return (
    <div className="mx-start max-w-xl space-y-8">
      <section className="space-y-2" aria-labelledby="integrations-connected-heading">
        <h3
          id="integrations-connected-heading"
          className="text-base font-semibold tracking-tight"
        >
          Connected
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Active integrations sync on their configured schedule. Pause or
          disconnect from Manage.
        </p>
        <div className="">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Google Business</ItemTitle>
              <ItemDescription>
                Integrate your Google Business reviews with your dashboard.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size={'sm'} variant={'outline'}>Connect</Button>
            </ItemActions>
          </Item>

        </div>
      </section>

      <Separator />

      <section className="space-y-2" aria-labelledby="integrations-available-heading">
        <h3
          id="integrations-available-heading"
          className="text-base font-semibold tracking-tight"
        >
          Available integrations
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Add a new connection. You will be asked to authorize this workspace.
        </p>

        <div className="">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Google Business</ItemTitle>
              <ItemDescription>
                Integrate your Google Business reviews with your dashboard.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size={'sm'} variant={'outline'}>Connect</Button>
            </ItemActions>
          </Item>

        </div>

      </section>
    </div>
  )
}
