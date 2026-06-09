import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const categories = [
    { "title": "AI", "description": "Artificial intelligence workflows for automation, decision-making, reasoning, and intelligent task execution.",'url': '/ai' },
    { "title": "AI Chatbot", "description": "Conversational AI workflows for customer support, assistants, and automated interactions.",'url': '/ai-chatbot' },
    { "title": "AI RAG", "description": "Retrieval-Augmented Generation workflows using knowledge bases, vector databases, and document retrieval.",'url': '/ai-rag' },
    { "title": "AI Summarization", "description": "Workflows that summarize documents, meetings, emails, reports, and large datasets.",'url': '/ai-summarization' },
    { "title": "Building Blocks", "description": "Reusable workflow components, templates, utilities, and automation foundations.",'url': '/building-blocks' },
    { "title": "CRM", "description": "Customer relationship management workflows for contacts, pipelines, and customer engagement.",'url': '/crm' },
    { "title": "Content Creation", "description": "Automations for generating articles, blogs, marketing copy, and creative content.",'url': '/content-creation' },
    { "title": "Crypto Trading", "description": "Cryptocurrency trading, monitoring, analysis, and portfolio automation workflows.",'url': '/crypto-trading' },
    { "title": "Design", "description": "Creative and design-focused workflows for assets, graphics, and visual content generation.",'url': '/design' },
    { "title": "DevOps", "description": "Infrastructure, deployment, CI/CD, monitoring, and operational automation workflows.",'url': '/devops' },
    { "title": "Document Extraction", "description": "Workflows for extracting structured data from PDFs, invoices, forms, and documents.",'url': '/document-extraction' },
    { "title": "Document Ops", "description": "Document processing, organization, management, and lifecycle automation workflows.",'url': '/document-ops' },
    { "title": "Engineering", "description": "Software engineering workflows for development, testing, code generation, and maintenance.",'url': '/engineering' },
    { "title": "File Management", "description": "Automations for file storage, transfer, organization, synchronization, and processing." },
    { "title": "Finance", "description": "Financial operations, accounting, forecasting, reporting, and transaction workflows.",'url': '/finance' },
    { "title": "HR", "description": "Human resources workflows for recruitment, onboarding, employee management, and compliance.",'url': '/hr' },
    { "title": "IT Ops", "description": "IT operations workflows for monitoring, incident management, provisioning, and maintenance.",'url': '/it-ops' },
    { "title": "Internal Wiki", "description": "Knowledge management workflows for internal documentation and information sharing.",'url': '/internal-wiki' },
    { "title": "Invoice Processing", "description": "Invoice extraction, validation, approval, accounting, and payment automation workflows.",'url': '/invoice-processing' },
    { "title": "Lead Generation", "description": "Workflows for discovering, enriching, qualifying, and capturing new leads.",'url': '/lead-generation' },
    { "title": "Lead Nurturing", "description": "Automated communication and engagement workflows to convert leads into customers.",'url': '/lead-nurturing' },
    { "title": "Market Research", "description": "Research workflows for collecting, analyzing, and monitoring market intelligence.",'url': '/market-research' },
    { "title": "Marketing", "description": "Marketing automation workflows for campaigns, analytics, engagement, and optimization.",'url': '/marketing' },
    { "title": "Miscellaneous", "description": "General-purpose workflows that do not fit into a specific category.",'url': '/miscellaneous' },
    { "title": "Multimodal AI", "description": "AI workflows combining text, images, audio, video, and other data modalities.",'url': '/multimodal-ai' },
    { "title": "Other", "description": "Additional workflows covering unique or specialized automation use cases.",'url': '/other' },
    { "title": "Personal Productivity", "description": "Productivity workflows for task management, scheduling, notes, and personal organization.",'url': '/personal-productivity' },
    { "title": "Product", "description": "Product management workflows for planning, feedback analysis, roadmaps, and development.",'url': '/product' },
    { "title": "Project Management", "description": "Workflows for planning, tracking, coordinating, and managing projects.",'url': '/project-management' },
    { "title": "Sales", "description": "Sales automation workflows for prospecting, outreach, pipeline management, and closing deals.",'url': '/sales' },
    { "title": "SecOps", "description": "Security operations workflows for monitoring, threat detection, compliance, and response.",'url': '/secops' },
    { "title": "Social Media", "description": "Social media automation workflows for publishing, engagement, monitoring, and analytics.",'url': '/social-media' },
    { "title": "Support", "description": "Customer support workflows for inquiries, resolutions, and service operations.",'url': '/support' },
    { "title": "Support Chatbot", "description": "AI-powered support chatbot workflows for customer assistance and self-service.",'url': '/support-chatbot' },
    { "title": "Ticket Management", "description": "Workflows for ticket creation, assignment, tracking, escalation, and resolution.",'url': '/ticket-management' }
  ]

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const filteredCategories = categories.filter((category) => category.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div className='p-12'>
            <h1 className='text-2xl font-bold'>Categories</h1>
            <p className='text-sm text-muted-foreground'>Browse workflows by category to find exactly what you're looking for.</p>

            <Input className='w-1/3 mt-3'
            onChange={(e) => {
                setSearchTerm(e.target.value)
            }}
            placeholder='Search categories' />
            <div className='grid grid-cols-1 md:grid-cols-2 pt-4 lg:grid-cols-4 gap-4'>
                {filteredCategories.map((category) => (
                    <Card key={category.title}  className='hover:shadow-lg transition-all duration-300' onClick={() => navigate(category.url)}>
                        <CardContent className='h-72'>
                            <span className='float-right'><Badge variant={'secondary'}>0 Workflows</Badge></span>
                        </CardContent>
                        <CardFooter className='flex flex-col gap-2 items-start'> 
                            <CardTitle>{category.title}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Page