# Contributing to untukkita.sda

To contribute to this project, we ask all contributors to understand some of the features of GitHub to make it easier for maintainers to review all contributions made by contributors.

## Onboarding

All developments in this project use issues as the basis for all contributions made. Everyone can provide an issue for discussion. You can search for available issues on the issues tab of this repository. Contributors can contribute to [open issues](https://github.com/untukkita-id/sda.untukkita.id/issues?q=is%3Aissue+is%3Aopen+). Contributors are free to choose which issues will be taken and worked on by themselves. Otherwise, [closed issues](https://github.com/untukkita-id/sda.untukkita.id/issues?q=is%3Aissue+is%3Aclosed) are issues that have been resolved and do not need to be followed up unless there are problems related to the issue in the future.

## Getting Involved

It was previously explained that this project was developed based on the available issues, now it will be explained how to work with the issues themselves.

Before starting, make sure you have done the following:

1. Fork the [`untukkita.sda`](https://github.com/untukkita-id/sda.untukkita.id) repository properly.
2. Check the Pull Request and make sure no one is working on the issue you are going to work on.
3. Create a new branch from the main branch with name format:

```md
<issuesnumber>-<type>-issuesshortname

Example:
1-feat-ssgrendering
```

It is important to note that the branch name should be unique.

After doing these checks, communicate to the maintainer about the issue that you will be working on. That way, the maintainer will assign the issue to you and everyone can know if you're working on the issue.

Not only that, you can also use the Draft Pull Request as a sign that you are working on the issue, regardless of the status in progress or the review process.

That said, communicate with the maintainer either through issue cards or Draft Pull Requests. The maintainer will be happy to review all of your contributions.

### Working with Issues

Issues can be opened by anyone, you can open an issue easily. We recommend using the provided template so that each issue has a description and it is easy to categorize the issue.

Currently, there are two kinds of issue templates that anyone can create, namely [Bug Reports](https://github.com/untukkita-id/sda.untukkita.id/issues/new?template=bug-reports.md) and [Feature Requests & Changes](https://github.com/untukkita-id/sda.untukkita.id/issues/new?template=FEATURE_REQUEST.md).

In creating an issue, please pay attention to the format for naming the issue to make it easier for contributors and maintainers to find and categorize issues.

```md
type: Issues Title
```

Example:

```md
feat: Add new feature
fix: Fix bug
docs: Add documentation
style: Fix style
refactor: Refactor code
perf: Improve performance
test: Add tests
```

### Make a Pull Request

1. Commit and push the changes you made to your fork repository. Make sure you are following the [Conventional Commits](https://conventionalcommits.org/) guidelines.
2. Create a new Draft Pull Request.
3. Give a clear title and description using the project PR template.
4. Pick Create Draft Pull Request as the action.
5. Don't forget to change your PR as Ready to review when you're done.

#### Pull Request Template

To make it easier to structure a good pull request description, use the Pull Request Template format provided when creating a Pull Request. A basic example can be seen below.

```md
# Description

Closes #

## Finished Task

## Screenshots (if appropriate)

## Types of changes

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
```

## References

### Conventioanl Commits

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

Please read more at [Conventional Commits](https://conventionalcommits.org/).

The commit message should be structured as follows:

```md
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Commit Types

Below are the types of commit that can be made:

| Type     | Description                                                   |
| :------- | :------------------------------------------------------------ |
| feat     | A new feature                                                 |
| fix      | A bug fix                                                     |
| docs     | Documentation only changes                                    |
| style    | Changes that do not affect the meaning of the code.           |
| refactor | A code change that neither fixes a bug nor adds a feature     |
| perf     | A code change that improves performance                       |
| test     | Adding missing or correcting tests                            |
| chore    | Changes to the build process or auxiliary tools and libraries |
| revert   | Revert to a commit                                            |
| ci       | Changes to CI configuration files                             |
| build    | Changes to the build system itself                            |

#### Commit Scopes

Below are the scopes that can be used:

| Type   | Description           |
| :----- | :-------------------- |
| page   | Changes to the page   |
| seo    | Changes to the SEO    |
| ui     | Changes to the UI     |
| dx     | Changes to the DX     |
| deps   | Changes to the deps   |
| assets | Changes to the assets |

### Issues and Pull Requests Labels

Issue labeling is intended to categorize issues and pull requests to make it easier for maintainers to document and create project milestones.

#### Status labels

| Label                                                                                                      | Description            |
| :--------------------------------------------------------------------------------------------------------- | :--------------------- |
| [status-open](https://github.com/untukkita-id/sda.untukkita.id/labels/status-open)                         | Open issue             |
| [status-close](https://github.com/untukkita-id/sda.untukkita.id/labels/status-close)                       | Closed issue           |
| [status-merge](https://github.com/untukkita-id/sda.untukkita.id/labels/status-merge)                       | Merged issue           |
| [status-duplicate](https://github.com/untukkita-id/sda.untukkita.id/labels/status-duplicate)               | Duplicate issue        |
| [status-invalid](https://github.com/untukkita-id/sda.untukkita.id/labels/status-invalid)                   | Invalid issue          |
| [status-wip](https://github.com/untukkita-id/sda.untukkita.id/labels/status-wip)                           | Work in progress issue |
| [status-wontfix](https://github.com/untukkita-id/sda.untukkita.id/labels/status-wontfix)                   | Won't fix issue        |
| [status-needs-review](https://github.com/untukkita-id/sda.untukkita.id/labels/status-need-review)          | Needs review issue     |
| [status-needs-discussion](https://github.com/untukkita-id/sda.untukkita.id/labels/status-needs-discussion) | Needs discussion issue |
| [status-verified](https://github.com/untukkita-id/sda.untukkita.id/labels/status-verified)                 | Verified issue         |
| [status-other](https://github.com/untukkita-id/sda.untukkita.id/labels/status-otger)                       | Other issue            |

#### Types Labels

| Label                                                                                            | Description          |
| :----------------------------------------------------------------------------------------------- | :------------------- |
| [type-bug](https://github.com/untukkita-id/sda.untukkita.id/labels/type-bug)                     | Bug report           |
| [type-feature](https://github.com/untukkita-id/sda.untukkita.id/labels/type-feature)             | Feature request      |
| [type-improvement](https://github.com/untukkita-id/sda.untukkita.id/labels/type-improvement)     | Improvement request  |
| [type-documentation](https://github.com/untukkita-id/sda.untukkita.id/labels/type-documentation) | Documentation change |
| [type-style](https://github.com/untukkita-id/sda.untukkita.id/labels/type-style)                 | Style change         |
| [type-refactor](https://github.com/untukkita-id/sda.untukkita.id/labels/type-refactor)           | Refactor change      |
| [type-testing](https://github.com/untukkita-id/sda.untukkita.id/labels/type-testing)             | Test change          |
| [type-other](https://github.com/untukkita-id/sda.untukkita.id/labels/type-other)                 | Other change         |
| [type-question](https://github.com/untukkita-id/sda.untukkita.id/labels/type-question)           | Question             |

#### Priority Labels

| Label                                                                                          | Description                                   |
| :--------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| [priority-critical](https://github.com/untukkita-id/sda.untukkita.id/labels/priority-critical) | **Must be resolved immediately**              |
| [priority-high](https://github.com/untukkita-id/sda.untukkita.id/labels/priority-high)         | Need more attention and effort                |
| [priority-medium](https://github.com/untukkita-id/sda.untukkita.id/labels/priority-medium)     | Issues can be resolved with peace             |
| [priority-low](https://github.com/untukkita-id/sda.untukkita.id/labels/priority-low)           | Issues can be ignored when everything in heat |
| [priority-trivial](https://github.com/untukkita-id/sda.untukkita.id/labels/priority-trivial)   | We don't know exactly                         |
| [priority-other](https://github.com/untukkita-id/sda.untukkita.id/labels/priority-other)       | It must be resolved, when?                    |

#### Scope Labels

| Label                                                                                              | Description           |
| :------------------------------------------------------------------------------------------------- | :-------------------- |
| [scope-ux](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-ux)                       | UX related            |
| [scope-ui](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-ui)                       | UI related            |
| [scope-security](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-security)           | Security related      |
| [scope-performance](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-performance)     | Performance related   |
| [scope-accessibility](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-accessibility) | Accessibility related |
| [scope-other](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-other)                 | Other                 |
| [scope-dx](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-dx)                       | DX related            |
| [scope-ci-cd](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-ci-cd)                 | CI/CD related         |
| [scope-seo](https://github.com/untukkita-id/sda.untukkita.id/labels/scope-seo)                     | SEO related           |

Any problems could be reported to [@untukkita Sidoarjo Discussion Tab](https://github.com/untukkita-id/sda.untukkita.id/discussions).

Happy Contributing :heart:
