import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeftIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const categories = [
    { "title": "Real Estate RAG", "description": "Retrieval-Augmented Generation workflows using knowledge bases, vector databases, and document retrieval.","url": "/ai-rag" },
    { "title": "Healthcare RAG", "description": "Workflows for healthcare data extraction, analysis, and decision-making.","url": "/ai-rag" },
    { "title": "Legal RAG", "description": "Workflows for legal data extraction, analysis, and decision-making.","url": "/ai-rag" },
    { "title": "Financial RAG", "description": "Workflows for financial data extraction, analysis, and decision-making.","url": "/ai-rag" },
    { "title": "Insurance RAG", "description": "Workflows for insurance data extraction, analysis, and decision-making.","url": "/ai-rag" },
    { "title": "Insurance RAG", "description": "Workflows for insurance data extraction, analysis, and decision-making.","url": "/ai-rag" },
  ]

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const filteredCategories = categories.filter((category) => category.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div className='p-12 flex flex-col gap-4'>
            <Button className='w-fit' onClick={() => navigate('/')} variant={'secondary'}>
                <HugeiconsIcon icon={ArrowLeftIcon} />
                Go Back
            </Button>
            <Input className='w-1/3 mt-3'
            onChange={(e) => {
                setSearchTerm(e.target.value)
            }}
            placeholder='Search categories' />
            <div className='grid grid-cols-1 md:grid-cols-2 pt-4 lg:grid-cols-4 gap-4'>
                {filteredCategories.map((category) => (
                    <Card key={category.title} className='hover:shadow-lg transition-all duration-300'>
                        <CardContent className='h-72'>
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