import {
  ProjectItemContainer,
  ProjectImage,
  ProjectName,
} from './styledComponents'

const ProjectItem = props => {
  const {projectDetails} = props
  const {imageUrl, name} = projectDetails

  return (
    <ProjectItemContainer>
      <ProjectImage src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ProjectItemContainer>
  )
}

export default ProjectItem
