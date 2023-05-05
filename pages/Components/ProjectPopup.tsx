import React, { FC } from 'react'

interface Props {
  title: string
  description: string
  onClose: () => void
}

const ProjectPopup: FC<Props> = ({ title, description, onClose }) => {
  return (
    <div className="project-popup">
      <div className="project-popup-content">
        <h2>{title}</h2>
        <p>{}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default ProjectPopup
