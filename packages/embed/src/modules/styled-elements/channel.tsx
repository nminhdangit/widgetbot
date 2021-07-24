import { connect } from 'fluent'
import * as React from 'react'
import styled from 'typed-emotion'

// prettier-ignore
export const Hash = styled.div`
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3e%3cpath fill='${({ theme }) => encodeURIComponent(theme.colors._primary.fadeOut(0.6).toString())}' d='M3.6 14l.5-2.7H1.4l.2-1.3h2.7L5 6H2.4l.2-1.3h2.7L5.7 2h1.4l-.5 2.7h4L11 2h1.3l-.5 2.7h2.7L14.4 6h-2.7l-.7 4h2.6l-.2 1.3h-2.7l-.4 2.7H8.9l.5-2.7h-4L5 14H3.6zm2.8-8l-.8 4h4l.8-4h-4z'/%3e%3c/svg%3e");
`

// prettier-ignore
export const MegaphoneIcon = styled.div`
  background-position: 50%;
  background-repeat: no-repeat;
  // background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 25' width='16' height='16'%3e%3cpath fill='${({ theme }) => encodeURIComponent(theme.colors._primary.fadeOut(0.6).toString())}' d='M19,1c-0.6,0-1,0.5-1,1L2,7c0-0.5-0.4-1-1-1C0.4,6,0,6.4,0,7v7c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1l2,0.5V18c0,0.5,0.4,1,1,1  l6,0c0.5,0,1-0.5,1-1v-1.5l6,1.5c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1V2C20,1.4,19.6,1,19,1z M10,17H6v-2l4,1V17z'/%3e%3c/svg%3e");
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16'%3e%3cpath fill='${({ theme }) => encodeURIComponent(theme.colors._primary.fadeOut(0.6).toString())}' d='M3.9 8.26H2V15.2941H3.9V8.26Z M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z'/%3e%3c/svg%3e");
`

interface Props {
  id: string
  className?: string
}

/**
 * Routable channel
 */
const Channel = connect<Props>()
  .with(({ state, signals, props }) => ({
    switchChannel: signals.switchChannel
  }))
  .toClass(
    props =>
      class Channel extends React.PureComponent<typeof props> {
        url: string

        componentWillMount() {
          this.url = this.getUrl()
        }

        getUrl() {
          const { id } = this.props
          const path = location.pathname.split('/')

          return path.length > 5 ? id : `/channels/${path[2]}/${id}/`
        }

        handleClick = (e: Event) => {
          const { switchChannel, id } = this.props
          e.preventDefault()

          history.pushState(null, null, this.url)

          switchChannel({
            channel: id
          })
        }

        render() {
          return (
            <a
              href={this.url}
              {...{
                className: this.props.className,
                children: this.props.children
              }}
              onClick={this.handleClick.bind(this)}
            />
          )
        }
      }
  )

export default Channel
