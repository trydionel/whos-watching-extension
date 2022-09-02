import React, { useEffect } from 'react'
import { FIELD_BASE, IDENTIFIER } from '../config'
import { Viewer } from './Viewer';

export const Attribute = ({ record, viewers }) => {
  useEffect(() => {
    const user = aha.user;
    const extensionFieldKey = `${FIELD_BASE}:${user.id}`;
    const payload: ViewerData = {
      id: String(user.id),
      name: user.name,
      avatar: user.avatarUrl,
      viewedAt: +new Date()
    };
    record.setExtensionField(IDENTIFIER, extensionFieldKey, payload);

    return () => {
      record.clearExtensionField(IDENTIFIER, extensionFieldKey)
    }
  }, []);

  if (viewers.length === 0) {
    return <span className="text-muted">No one else viewing</span>
  }

  return (
    <div>
      {
        viewers.map(viewer => {
          return <Viewer viewer={viewer} />
        })
      }
    </div>
  )
}