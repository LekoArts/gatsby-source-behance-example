import React from 'react';
import Card from '../components/Card';

const Index = props => {
  const projects = props.data.allBehanceProjects.edges;

  return (
    <div className="container index-container">
      <div className="flex-grid">
        {projects.map(project => (
          <Card
            date={project.node.published}
            views={project.node.stats.views}
            appreciations={project.node.stats.appreciations}
            comments={project.node.stats.comments}
            name={project.node.name}
            cover={project.node.covers.size_original}
            url={project.node.url}
            areas={project.node.areas}
            key={project.node.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;

/* eslint no-undef: 0 */
export const projectQuery = graphql`
  query projectQuery {
    allBehanceProjects(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          id
          name
          published
          url
          areas
          covers {
            size_original
          }
          stats {
            views
            appreciations
            comments
          }
        }
      }
    }
  }
`;
