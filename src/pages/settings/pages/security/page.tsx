import {
  ArrowRight,
  EncryptFreeIcons,
  KeyIcon,
  LinkIcon,
  PasswordValidationIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Switch } from "@/components/ui/switch"
import { googleIcon, microsoftIcon } from "@/assets/svg"

export default function SecuritySettingsPage() {
  return (
    <div className="max-w-2xl space-y-8 pb-12">

      <Field>
        <FieldSet>
          <FieldTitle className="mb-0">SSO</FieldTitle>
          <FieldDescription>
          Configure an SSO connection.
          </FieldDescription>
          <FieldContent>
            <Item variant="muted">
              <ItemMedia>
                <HugeiconsIcon icon={KeyIcon} strokeWidth={2} />
              </ItemMedia>
              <ItemContent>
                <ItemDescription>Add a SSO Provider</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="icon-sm">
                  <HugeiconsIcon icon={ArrowRight} strokeWidth={2} />
                </Button>
              </ItemActions>
            </Item>
          </FieldContent>
        </FieldSet>
      </Field>

      <Field>
        <FieldSet>
          <FieldTitle className="mb-0">Authentication</FieldTitle>
          <FieldDescription>Customize your workspace security</FieldDescription>
          <FieldContent>
            <ItemGroup>
              <Item variant="muted">
                <ItemMedia>
                  <img src={googleIcon} alt="Google" className="w-6 h-6" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Google</ItemTitle>
                  <ItemDescription>
                    Sign in with your Google account.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch />
                </ItemActions>
              </Item>
              <Item variant="muted">
                <ItemMedia>
                  <img src={microsoftIcon} alt="Microsoft" className="w-6 h-6" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Microsoft</ItemTitle>
                  <ItemDescription>
                    Sign in with your Microsoft account.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch />
                </ItemActions>
              </Item>
              <Item variant="muted">
                <ItemMedia>
                  <HugeiconsIcon icon={PasswordValidationIcon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Password</ItemTitle>
                  <ItemDescription>
                    Enable password authentication for your workspace.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch />
                </ItemActions>
              </Item>
              <Item variant="muted">
                <ItemMedia>
                  <HugeiconsIcon icon={LinkIcon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Invite by link</ItemTitle>
                  <ItemDescription>
                    Share this link to invite users to join your workspace.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch />
                </ItemActions>
              </Item>
              <Item variant="muted">
                <ItemMedia>
                  <HugeiconsIcon icon={EncryptFreeIcons} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Two-step verification</ItemTitle>
                  <ItemDescription>
                    Enforce two-step verification for every user login.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch />
                </ItemActions>
              </Item>
            </ItemGroup>
          </FieldContent>
        </FieldSet>
      </Field>
    </div>
  )
}
