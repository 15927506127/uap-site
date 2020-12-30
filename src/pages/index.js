import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '对外接口',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        该文档包含所有UAP 对外的接口，方便第三方接入UAP平台，无需和UAP 后端进行交互沟通即可实现对接
      </>
    ),
  },
  {
    title: '产品信息',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       包含产品信息
      </>
    ),
  },
  {
    title: '部署信息',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
       包含UAP 环境的部署信息
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="Document Versioning"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_version_control.svg')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <text>Document Versioning</text>
                </h2>
                <p className="padding-horiz--md">
                  <text>
                    Support users on all versions of your project. Document
                    versioning helps you keep documentation in sync with project
                    releases.
                  </text>
                </p>
              </div>
              <div className="col col--4">
                <img
                  alt="Document Search"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_algolia.svg')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <text>Content Search</text>
                </h2>
                <p className="padding-horiz--md">
                  <text>
                    Make it easy for your community to find what they need in
                    your documentation. We proudly support Algolia documentation
                    search.
                  </text>
                </p>
              </div>
            </div>
          </div>
    </Layout>
  );
}

export default Home;
