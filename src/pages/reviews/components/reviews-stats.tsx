import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import React from 'react'

const ReviewsStats = () => {
  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-5'>
        <Item variant="muted" className='h-fit'>
            <ItemContent>
                <ItemTitle>Total Reviews</ItemTitle>
                <ItemDescription className="leading-7 text-2xl font-medium">100</ItemDescription>
            </ItemContent>
        </Item>
        <Item variant="muted" className='h-fit'>
          <ItemContent>
            <ItemTitle>Positive Reviews</ItemTitle>
            <ItemDescription className="leading-7 text-2xl font-medium">50</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className='h-fit'>
          <ItemContent>
            <ItemTitle>Negative Reviews</ItemTitle>
            <ItemDescription className="leading-7 text-2xl font-medium">50</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted" className='h-fit'>
          <ItemContent>
            <ItemTitle>Average Rating</ItemTitle>
            <ItemDescription className="leading-7 text-2xl font-medium">4.5</ItemDescription>
          </ItemContent>
        </Item>
    </div>
  )
}

export default ReviewsStats