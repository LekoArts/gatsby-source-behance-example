import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import favicon from './favicon.ico'
import './index.css'

export default class TemplateWrapper extends Component {
  render() {
    const { children } = this.props
    const user = this.props.data.behanceUser

    return (
      <div>
        <Helmet
          title="Gatsby Source - Behance"
          meta={[
            { name: 'description', content: 'Sample Website for gatsby-source-behance' },
            { name: 'keywords', content: 'gatsby, source, behance, lekoarts' },
          ]}
        >
        <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Header user={user} />
        <div
          style={{
            margin: '-6rem auto 0 auto',
            maxWidth: 1200,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            position: 'relative'
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const userQuery = graphql`
	query userQuery {
		behanceUser {
      names {
        displayName
      }
      avatar
      place {
        location
      }
      url
      stats {
        followers
        appreciations
        views
      }
      socialMedia {
        social_id
        url
        service_name
      }
		}
	}
`
