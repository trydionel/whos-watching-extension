import React from 'react'

interface ViewerProps {
  viewer: ViewerData
}

export const Viewer = ({ viewer }: ViewerProps) => {
  return (
    <aha-tooltip>
      <div slot="trigger"><aha-avatar name={viewer.name} src={viewer.avatar} /></div>
      {viewer.name} is viewing since { new Date(viewer.viewedAt).toLocaleString() }
    </aha-tooltip>
  )
}