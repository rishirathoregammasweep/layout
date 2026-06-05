import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AiChatIcon, AiIdeaIcon, BrainIcon, Receipt, ToolsIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Field, FieldContent, FieldDescription, FieldSet, FieldTitle } from '@/components/ui/field'
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '@/components/ui/item'

import {
  BookOpen01Icon,
  Camera01Icon,
  Earth,
  File01Icon,
  Image01Icon,
  Paperclip,
  PlusSignIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
const Page = () => {
  return (
    <div className='max-w-2xl'>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">
            <HugeiconsIcon icon={AiChatIcon} strokeWidth={2} />
            Models
          </TabsTrigger>
          <TabsTrigger disabled value="analytics">
            <HugeiconsIcon icon={AiIdeaIcon} strokeWidth={2} />
            Skills
          </TabsTrigger>
          <TabsTrigger disabled value="reports">
            <HugeiconsIcon icon={ToolsIcon} strokeWidth={2} />
            Tools
          </TabsTrigger>
          <TabsTrigger disabled value="settings">
            <HugeiconsIcon icon={Receipt} strokeWidth={2} />
            Usage
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 py-4">
          <Field>
            <FieldSet>
              <FieldTitle className='mb-0'>Default</FieldTitle>
              <FieldDescription>Configure your default AI model to use for your projects</FieldDescription>
              <FieldContent>
                <ItemGroup>
                  <Item variant={'muted'}>
                    <ItemMedia>
                      <HugeiconsIcon icon={BrainIcon} strokeWidth={2} />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Smart Model</ItemTitle>
                      <ItemDescription>Used for chats, agents, and complex reasoning</ItemDescription>
                    </ItemContent>

                    <ItemActions>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size={'sm'}>
                            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                            Select Model
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>Add to message</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Paperclip} strokeWidth={2} />
                              Attach files & images
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
                              Upload document
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Image01Icon} strokeWidth={2} />
                              Paste image
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Camera01Icon} strokeWidth={2} />
                              Take screenshot
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>Tools</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                              Search the web
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Earth} strokeWidth={2} />
                              Deep research
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                              New conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} />
                              Prompt templates
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </ItemActions>
                  </Item>
                  <Item variant={'muted'}>
                    <ItemMedia>
                      <HugeiconsIcon icon={BrainIcon} strokeWidth={2} />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Fast Model</ItemTitle>
                      <ItemDescription>Used for lightweight tasks like title generation</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size={'sm'}>
                            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                            Select Model
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>Add to message</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Paperclip} strokeWidth={2} />
                              Attach files & images
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
                              Upload document
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Image01Icon} strokeWidth={2} />
                              Paste image
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Camera01Icon} strokeWidth={2} />
                              Take screenshot
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>Tools</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                              Search the web
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={Earth} strokeWidth={2} />
                              Deep research
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                              New conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} />
                              Prompt templates
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </ItemActions>
                  </Item>
                </ItemGroup>
              </FieldContent>
            </FieldSet>
          </Field>

        </TabsContent>
        <TabsContent value="analytics">
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default Page