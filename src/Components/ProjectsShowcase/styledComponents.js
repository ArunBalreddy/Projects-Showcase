import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
`

export const SelectEl = styled.select`
  width: 300px;
  padding: 10px;
  font-family: 'Roboto';
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`

export const ProjectsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
export const RetryButton = styled.button`
  background-color: #328af2;
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
`
export const FailureImage = styled.img`
  height: 300px;
  width: 400px;
`
