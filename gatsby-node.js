exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  const redirects = [
    {
      fromPath: '/stories/2017/05/23/summer-code-and-librecores/',
      toPath:
        'https://medium.com/@agathver/summer-code-and-librecores-e46212f6a289',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2017/06/08/invoking-executables-from-php-safely/',
      toPath:
        'https://medium.com/@agathver/invoking-executables-from-php-safely-d4e4cabe650f',
      isPermanent: true,
      force: true,
    },
    {
      fromPath:
        '/stories/2017/06/10/monitoring-network-usage-of-a-linux-machine/',
      toPath:
        'https://medium.com/@agathver/monitoring-network-usage-of-a-linux-machine-cf14529a1179',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2017/06/26/autofs-for-automatic-nfs-mounts/',
      toPath:
        'https://medium.com/@agathver/almost-zero-configuration-nfs-network-shares-using-autofs-99cdbabceb69',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2017/07/03/one-month-of-gsoc-with-fossi/',
      toPath:
        'https://medium.com/@agathver/one-month-of-google-summer-of-code-with-fossi-7925ff973695',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2017/07/16/graphql/',
      toPath:
        'https://medium.com/@agathver/an-introduction-to-graphql-555dbefd8582',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2017/08/28/gsoc-2017-project-report/',
      toPath:
        'https://medium.com/@agathver/gsoc-project-report-quality-metrics-for-projects-listed-on-librecores-org-7b19bc3e2702',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2017/09/10/gsoc-payments/',
      toPath:
        'https://medium.com/@agathver/the-state-of-the-gsoc-payments-for-india-2017-c00ed6601f12',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2018/04/29/summer-code-and-fedora/',
      toPath:
        'https://medium.com/@agathver/summer-code-and-fedora-36948753fdf2',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2018/05/14/gsoc-2018-kicking-off-the-coding/',
      toPath:
        'https://medium.com/@agathver/gsoc-2018-kicking-off-the-coding-fc509c91e6e3',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2018/05/22/gsoc-2018-week-1/',
      toPath: 'https://medium.com/@agathver/gsoc-2018-week-1-1a48c57aae16',
      isPermanent: true,
      force: true,
    },
    {
      fromPath: '/stories/2018/05/30/gsoc-2018-week-2/',
      toPath: 'https://medium.com/@agathver/gsoc-2018-week-2-1c8877f38d47',
      isPermanent: true,
      force: true,
    },
  ]

  redirects.forEach(redirect => createRedirect(redirect))

  // Create pages here
}
