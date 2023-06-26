import React from 'react'
import CommentList from './CommentList/CommentList'
import CommentBox from './CommentBox/CommentBox'
import { Box } from '@mui/material'

export const CommentWrapper = () => {
  return (
    <Box sx={{ backgroundColor: '#e6e6e6'}}>
    <Box sx={{ paddingBottom: '50px' }}>
        <CommentList />
        <CommentBox/>  
    </Box>
    </Box>
  )
}
