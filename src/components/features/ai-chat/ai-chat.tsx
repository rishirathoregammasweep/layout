import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "@/components/ui/input-group"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    BookOpen01Icon,
    Camera01Icon,
    ChatSpark01FreeIcons,
    Earth,
    File01Icon,
    Image01Icon,
    Paperclip,
    PlusSignIcon,
    Search01Icon,
    Sent02Icon,
    SparklesIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const AiChat = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="secondary" size={'lg'}>
                    <HugeiconsIcon icon={ChatSpark01FreeIcons} strokeWidth={2} />
                    Open AI Chat
                </Button>
            </SheetTrigger>
            <SheetContent className="!max-w-xl border-none">
                <div className="p-4 flex items-center justify-center h-full">
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia variant="icon">
                                <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
                            </EmptyMedia>
                            <EmptyTitle>New Chat</EmptyTitle>
                            <EmptyDescription>
                                Ask about anything you want
                            </EmptyDescription>
                        </EmptyHeader>
                        <Button
                            variant="link"
                            asChild
                            className="text-muted-foreground"
                            size="sm"
                        >
                        </Button>
                    </Empty>

                </div>
                <SheetFooter>
                    <InputGroup>
                        <InputGroupTextarea
                            className="max-h-40"
                            id="block-end-textarea"
                            placeholder="Write a comment..."
                        />
                        <InputGroupAddon align="block-end">
                            <InputGroupButton variant="secondary" size={'icon-sm'} className="mr-auto">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size={'icon-sm'} className="rounded-full">
                                            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56" align="start">
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

                            </InputGroupButton>

                            <InputGroupButton variant='secondary' size="icon-sm" className="ml-auto">
                                <HugeiconsIcon icon={Sent02Icon} strokeWidth={2} />
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>

                    <div className="grid gap-3 grid-cols-3">
                        <Item variant={'outline'} className="hover:bg-muted select-none">
                            <ItemMedia variant={'icon'}>
                                <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>New Chat</ItemTitle>
                                <ItemDescription>Create a new chat with the AI</ItemDescription>
                            </ItemContent>
                        </Item>

                        <Item variant={'outline'} className="hover:bg-muted select-none">
                            <ItemMedia variant={'icon'}>
                                <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Search</ItemTitle>
                                <ItemDescription>Files, websites, and more</ItemDescription>
                            </ItemContent>
                        </Item>

                        <Item variant={'outline'} className="hover:bg-muted select-none">
                            <ItemMedia variant={'icon'}>
                                <HugeiconsIcon icon={Earth} strokeWidth={2} />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Research</ItemTitle>
                                <ItemDescription>Find information on the web</ItemDescription>
                            </ItemContent>
                        </Item>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default AiChat