import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import PageBuilder from 'components/layout/pageBuilder';
import SectionGrub from 'components/common/sections';
import CardInformasi from 'components/card/card-informasi';

export const siteInfo = {
  metaTitle: 'UntukKita.sda - Kumpulan Informasi',
  metaDescription: 'Ringkasan Informasi yang dikemas secara ringkas oleh tim UntukKita.sda.',
  pageDescription: 'Ringkasan Informasi yang dikemas secara ringkas oleh tim UntukKita.sda.',
  pageTitle: 'Kumpulan Informasi',
  headerTitle: 'Ringkasan Informasi',
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
      />,
    );
  });
  return (
    <PageBuilder
      metaTitle={siteInfo.title}
      metaDescription={siteInfo.description}
      pageTitle={siteInfo.pageTitle}
      pageDescription={siteInfo.pageDescription}
      headerTitle={siteInfo.headerTitle}
    >
      <SectionGrub title="Informasi Umum">
        <ul>{informationList}</ul>
      </SectionGrub>
    </PageBuilder>
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
