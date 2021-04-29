import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';

const NotFound = () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFound;
