import { Stack, TextField } from '@mui/material'
import React from 'react'

export default function registration() {
  return (

    <div>
         <from>
         <Stack
              component="form"
              sx={{
                width: '25ch',
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >

              <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                />
            </Stack>
         </from>

    </div>
  )
}
