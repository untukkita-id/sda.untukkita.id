# UntukKita - Informasi Vaksinasi Sidoarjo

[![Code Analysis and Security Check](https://github.com/untukkita-id/sda.untukkita.id/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/untukkita-id/sda.untukkita.id/actions/workflows/codeql-analysis.yml)
[![Test Runner](https://github.com/untukkita-id/sda.untukkita.id/actions/workflows/test.yml/badge.svg)](https://github.com/untukkita-id/sda.untukkita.id/actions/workflows/test.yml)
[![Lighthouse Production](https://github.com/untukkita-id/sda.untukkita.id/actions/workflows/lighthouse-prod.yml/badge.svg)](https://github.com/untukkita-id/sda.untukkita.id/actions/workflows/lighthouse-prod.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/untukkita-id/sda.untukkita.id/badge)](https://www.codefactor.io/repository/github/untukkita-id/sda.untukkita.id)

untukkita.sda is an initiative to provide vaccination information and health services needed by the people of Sidoarjo during the pandemic. Based on our quick observations, we get the result that there is still no portal that focuses on providing vaccination information and health services. From this, we have the initiative to create a portal that can make it easier for the public to get information on vaccinations, facilities and health services for COVID-19.

In practice, we collect data (aggregation) from various credible sources, such as social media of the official or city government or the relevant agency unit. We perform quick validation of the information obtained by matching content and credible data sources.

The core team for untukkita.sda itself consists of student volunteers from Sidoarjo and the community with backgrounds in technology and data. Currently, the team for untukkita.sda consists of 5 members. We welcome contributions from the community in improving our quality in helping the community both in the scope of data, relations and technology.

# Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/untukkita-id/sda.untukkita.id.git
```

Then, install dependencies and fetch data to your local machine. Note that we use Yarn, not npm.

```bash
cd sda.untukkita
yarn install
yarn fetch-data
```

Finally, run the development server.

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

# Find us

- [Instagram Account](https://www.instagram.com/untukkita.sda)
- [Github Repository](https://github.com/untukkita-id/sda.untukkita.id)
- [Data Source](https://docs.google.com/spreadsheets/d/1l1O7tE5rY4Uzaa66fX2ULw0wpPUZ-UH5YS7tvgrEWYg/edit?usp=sharing)
