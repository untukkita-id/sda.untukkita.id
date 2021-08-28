import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

import PageTitle from 'components/page-title';
import Footer from 'components/footer';
import Header from 'components/header';
import SectionGrub from 'components/sections';
import CardInformasi from 'components/card-informasi';

export const meta = {
  metaTitle: 'Hubungi Kami - Untuk Kita Sidoarjo',
  metaDescription: 'Kontak tim Untukkita.sda',
  pageDescription: 'Kontak tim Untukkita.sda',
  pageTitle: 'Hubungi Kami',
};

export default function Informasi({ data }) {
  const informationList = [];
  data.forEach(item => {
    const { frontmatter, slug } = item;
    informationList.push(
      <CardInformasi
        key={slug}
        title={frontmatter.title}
        description={frontmatter.description}
        slug={slug}
      />
    );
  });
  return (
    <div id="home" className="text-gray-700">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.metaDescription} />
        <meta name="title" content={meta.metaTitle} />
        <meta property="og:url" content="https://covid.sda.untukkita.my.id/" />
        <meta property="og:title" content={meta.metaTitle} />
        <meta property="og:description" content={meta.metaDescription} />
        <meta property="twitter:title" content={meta.metaTitle} />
        <meta property="twitter:description" content={meta.metaDescription} />
      </Head>
      <Header title={meta.pageTitle} />
      <PageTitle title={meta.pageTitle} description={meta.pageTitle} />
      <SectionGrub title="Informasi Umum">
        <ul>{informationList}</ul>
      </SectionGrub>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const postFilePaths = fs
    .readdirSync(path.join(process.cwd(), 'post'))
    // eslint-disable-next-line no-shadow
    .filter(path => /\.mdx?$/.test(path));

  const posts = postFilePaths.map(postFilePath => {
    const postFile = fs.readFileSync(path.join(process.cwd(), 'post', postFilePath));
    const post = {
      slug: postFilePath.replace(/\.mdx?$/, ''),
      content: postFile.toString(),
    };
    return post;
  });

  const data = [];
  posts.forEach(post => {
    const { content, data: frontmatter } = matter(post.content);
    data.push({
      ...post,
      frontmatter,
      content,
    });
  });

  return {
    props: {
      data,
    },
  };
};
