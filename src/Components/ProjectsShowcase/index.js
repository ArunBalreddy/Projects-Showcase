import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  BgContainer,
  Container,
  SelectEl,
  LoaderContainer,
  ProjectsContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'
import ProjectItem from '../ProjectItem'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class ProjectsShowcase extends Component {
  state = {
    projectsList: [],
    activeCategoryId: categoriesList[0].id,
    apiStatus: 'LOADING',
  }

  componentDidMount() {
    this.getApiProjectsData()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#328af2" height={50} width={50} />
    </LoaderContainer>
  )

  getFormattedData = data => ({
    name: data.name,
    id: data.id,
    imageUrl: data.image_url,
  })

  getApiProjectsData = async () => {
    this.setState({apiStatus: 'LOADING'})
    const {activeCategoryId} = this.state

    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${activeCategoryId}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.projects.map(project =>
        this.getFormattedData(project),
      )

      this.setState({projectsList: updatedData, apiStatus: 'SUCCESS'})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  onClickRetryButton = () => {
    this.getApiProjectsData()
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We cannot seem to find the page you are looking for
      </FailurePara>
      <RetryButton onClick={this.onClickRetryButton}>Retry</RetryButton>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state

    return (
      <ProjectsContainer>
        {projectsList.map(project => (
          <ProjectItem key={project.id} projectDetails={project} />
        ))}
      </ProjectsContainer>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'LOADING':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  onChangeCategory = event => {
    this.setState(
      {activeCategoryId: event.target.value},
      this.getApiProjectsData,
    )
  }

  renderCategoriesContainer = () => (
    <SelectEl onChange={this.onChangeCategory}>
      {categoriesList.map(category => (
        <option key={category.id} value={category.id}>
          {category.displayText}
        </option>
      ))}
    </SelectEl>
  )

  render() {
    return (
      <BgContainer>
        <Header />
        <Container>
          {this.renderCategoriesContainer()}
          {this.renderView()}
        </Container>
      </BgContainer>
    )
  }
}

export default ProjectsShowcase
