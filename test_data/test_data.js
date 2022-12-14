module.exports.mock_site_info = {
    id: 'mock_site',
    name: 'mock_site',
    devices: [
        {
            id: 'correct_id',
            name: 'battery 1',
        },
    ],
};

module.exports.mock_site_info_no_outages = {
    id: 'mock_site',
    name: 'mock_site',
    devices: [
        {
            id: 'no_outages_id',
            name: 'battery 1',
        },
    ],
};

module.exports.mock_site_info_no_devices = {
    id: 'mock_site',
    name: 'mock_site',
    devices: [],
};

module.exports.mock_outages = [
    {
        id: 'correct_id',
        begin: '2022-01-12T08:11:21.333Z',
        end: '2022-12-13T07:20:57.984Z',
    },
    {
        id: 'correct_id',
        begin: '2022-03-12T08:11:21.333Z',
        end: '2022-12-13T07:20:57.984Z',
    },
    {
        id: 'correct_id',
        begin: '2022-01-01T00:00:00.000Z',
        end: '2022-12-13T07:20:57.984Z',
    },
    {
        id: 'correct_id',
        begin: '2021-12-31T23:59:59.999Z',
        end: '2022-07-17T11:36:59.310Z',
    },
    {
        id: 'incorrect_id',
        begin: '2022-03-12T08:11:21.333Z',
        end: '2022-12-13T07:20:57.984Z',
    },
    {
        id: 'incorrect_id',
        begin: '2022-03-12T08:11:21.333Z',
        end: '2022-12-13T07:20:57.984Z',
    },
    {
        id: 'incorrect_id',
        begin: '2022-03-12T08:11:21.333Z',
        end: '2022-12-13T07:20:57.984Z',
    },
    {
        id: 'incorrect_id',
        begin: '2022-03-12T08:11:21.333Z',
        end: '2022-12-13T07:20:57.984Z',
    },
];

module.exports.kf_site_info = {
    id: 'kingfisher',
    name: 'KingFisher',
    devices: [
        {
            id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
            name: 'Battery 1',
        },
        {
            id: '086b0d53-b311-4441-aaf3-935646f03d4d',
            name: 'Battery 2',
        },
    ],
};

module.exports.npt_site_info = {
    id: 'norwich-pear-tree',
    name: 'Norwich Pear Tree',
    devices: [
        {
            id: '111183e7-fb90-436b-9951-63392b36bdd2',
            name: 'Battery 1',
        },
        {
            id: '86b5c819-6a6c-4978-8c51-a2d810bb9318',
            name: 'Battery 2',
        },
        {
            id: '70656668-571e-49fa-be2e-099c67d136ab',
            name: 'Battery 3',
        },
        {
            id: '9ed11921-1c5b-40f4-be66-adb4e2f016bd',
            name: 'Battery 4',
        },
        {
            id: 'a79fe094-087b-4b1e-ae20-ac4bf7fa429b',
            name: 'Battery 5',
        },
        {
            id: '0e4d59ba-43c7-4451-a8ac-ca628bcde417',
            name: 'Battery 6',
        },
        {
            id: '20f6e664-f00e-4621-9ca4-5ec588aadeaf',
            name: 'Battery 7',
        },
        {
            id: '75e96db4-bba2-4035-8f43-df2cbd3da859',
            name: 'Battery 8',
        },
    ],
};

module.exports.npt_devices = [
    {
        id: '111183e7-fb90-436b-9951-63392b36bdd2',
        name: 'Battery 1',
    },
    {
        id: '86b5c819-6a6c-4978-8c51-a2d810bb9318',
        name: 'Battery 2',
    },
    {
        id: '70656668-571e-49fa-be2e-099c67d136ab',
        name: 'Battery 3',
    },
    {
        id: '9ed11921-1c5b-40f4-be66-adb4e2f016bd',
        name: 'Battery 4',
    },
    {
        id: 'a79fe094-087b-4b1e-ae20-ac4bf7fa429b',
        name: 'Battery 5',
    },
    {
        id: '0e4d59ba-43c7-4451-a8ac-ca628bcde417',
        name: 'Battery 6',
    },
    {
        id: '20f6e664-f00e-4621-9ca4-5ec588aadeaf',
        name: 'Battery 7',
    },
    {
        id: '75e96db4-bba2-4035-8f43-df2cbd3da859',
        name: 'Battery 8',
    },
];

module.exports.npt_device = {
    id: '9ed11921-1c5b-40f4-be66-adb4e2f016bd',
    name: 'Battery 4',
};

module.exports.outages = [
    {
        id: '00c6ec8e-54a4-495d-a78c-961515ac987c',
        begin: '2021-07-05T21:51:57.602Z',
        end: '2022-06-17T15:24:41.998Z',
    },
    {
        id: '012672a0-6c3f-4250-8878-8a0bd2e6f18f',
        begin: '2022-06-13T21:53:09.131Z',
        end: '2022-12-08T01:31:38.023Z',
    },
    {
        id: '019bcf3d-0e5a-4f1b-a28b-56067b2adeb7',
        begin: '2021-05-09T00:59:10.501Z',
        end: '2021-09-24T18:01:52.242Z',
    },
    {
        id: '042e9af6-dedd-417e-af5a-6de54b764129',
        begin: '2022-05-19T17:16:09.030Z',
        end: '2022-06-02T16:17:21.548Z',
    },
    {
        id: '096c7a46-9a7d-432c-a896-6cd67b869f70',
        begin: '2022-09-20T04:08:57.618Z',
        end: '2022-12-11T09:26:37.778Z',
    },
    {
        id: '0b4b7052-6771-43c0-9603-b11156611146',
        begin: '2022-02-22T12:52:38.131Z',
        end: '2022-11-03T17:35:28.320Z',
    },
    {
        id: '0de64aad-fd79-4da5-bcd8-a7134ced06f1',
        begin: '2022-06-23T00:30:08.247Z',
        end: '2022-12-31T15:32:44.948Z',
    },
    {
        id: '0e4d59ba-43c7-4451-a8ac-ca628bcde417',
        begin: '2022-02-15T11:28:26.735Z',
        end: '2022-08-28T03:37:48.568Z',
    },
    {
        id: '0e4d59ba-43c7-4451-a8ac-ca628bcde417',
        begin: '2020-10-29T20:23:43.559Z',
        end: '2023-05-29T00:59:55.313Z',
    },
    {
        id: '111183e7-fb90-436b-9951-63392b36bdd2',
        begin: '2022-01-01T00:00:00.000Z',
        end: '2022-09-15T19:45:10.341Z',
    },
    {
        id: '111183e7-fb90-436b-9951-63392b36bdd2',
        begin: '2022-02-18T01:01:20.142Z',
        end: '2022-08-15T14:34:50.366Z',
    },
    {
        id: '111183e7-fb90-436b-9951-63392b36bdd2',
        begin: '2021-02-14T07:16:56.370Z',
        end: '2022-01-08T18:41:01.238Z',
    },
    {
        id: '12264d26-06dc-4576-bfb6-520a1f473f1e',
        begin: '2021-08-24T02:30:06.536Z',
        end: '2022-10-01T07:24:43.176Z',
    },
    {
        id: '16bf0c50-43fa-4428-bca4-bc72f6251cdf',
        begin: '2022-09-15T08:03:31.942Z',
        end: '2022-10-31T04:32:18.522Z',
    },
    {
        id: '172fe48f-55bc-4fa9-ab48-d75272978e92',
        begin: '2021-01-10T13:40:13.104Z',
        end: '2021-03-14T00:27:41.565Z',
    },
    {
        id: '182a10eb-5fef-45e4-848e-b70cedc64d08',
        begin: '2021-12-20T22:36:03.854Z',
        end: '2022-10-30T12:15:40.281Z',
    },
    {
        id: '1ba0860e-7c33-45e6-bbb4-c74ea78865a5',
        begin: '2021-06-20T14:24:11.079Z',
        end: '2022-10-01T21:40:19.483Z',
    },
    {
        id: '1da016a5-ee2a-4a71-83e3-cfc3d3d69c47',
        begin: '2022-10-10T05:22:07.839Z',
        end: '2022-11-15T01:26:38.450Z',
    },
    {
        id: '20f6e664-f00e-4621-9ca4-5ec588aadeaf',
        begin: '2022-02-15T11:28:26.965Z',
        end: '2023-12-24T14:20:37.532Z',
    },
    {
        id: '20f6e664-f00e-4621-9ca4-5ec588aadeaf',
        begin: '2020-09-28T16:01:01.523Z',
        end: '2022-02-07T13:25:05.077Z',
    },
    {
        id: '22e59907-c6b0-4f94-ae3e-fa1d13c78176',
        begin: '2021-05-02T20:52:39.361Z',
        end: '2021-10-21T05:29:43.103Z',
    },
    {
        id: '24c64ca0-1006-41cf-ab95-cf5f2f816261',
        begin: '2022-12-15T03:28:42.941Z',
        end: '2022-12-15T05:18:13.511Z',
    },
    {
        id: '298c0f08-75d5-430f-b0c7-73b175707e53',
        begin: '2021-10-21T20:37:50.972Z',
        end: '2022-12-21T22:25:41.023Z',
    },
    {
        id: '29b648d2-47ab-41e4-bc4e-6191e24f5c84',
        begin: '2022-01-25T15:25:25.902Z',
        end: '2022-02-06T10:56:41.762Z',
    },
    {
        id: '2dd75446-7834-4096-81cd-fbf765b87237',
        begin: '2021-02-10T11:55:57.599Z',
        end: '2021-04-01T08:55:30.187Z',
    },
    {
        id: '2e136186-0646-440f-a1f3-8b70b78577c3',
        begin: '2022-03-26T15:12:45.102Z',
        end: '2022-05-31T05:02:48.437Z',
    },
    {
        id: '30b7d77c-a1b9-4820-9a2b-00e88925584e',
        begin: '2022-10-20T13:33:45.238Z',
        end: '2022-11-09T03:30:24.437Z',
    },
    {
        id: '317d53ca-c856-4b5a-9f50-b97bf42d9c1b',
        begin: '2021-11-19T17:03:06.926Z',
        end: '2022-04-05T08:33:30.926Z',
    },
    {
        id: '33acfd13-e522-4dd7-92cc-d98b676cee71',
        begin: '2021-07-08T07:33:33.650Z',
        end: '2022-07-24T20:11:42.026Z',
    },
    {
        id: '3464368c-d4b3-4fd1-862b-de357823b766',
        begin: '2022-05-27T05:00:01.371Z',
        end: '2022-07-15T07:59:40.668Z',
    },
    {
        id: '36749f79-9bde-4c31-b803-309bbe135478',
        begin: '2022-08-05T17:37:25.383Z',
        end: '2022-11-26T09:15:13.100Z',
    },
    {
        id: '39a95222-5649-4e78-a05e-694fcdab7de9',
        begin: '2022-08-26T22:58:47.662Z',
        end: '2022-09-20T07:45:21.822Z',
    },
    {
        id: '3c4a6010-748a-41b4-a5cb-901d4251c971',
        begin: '2021-07-30T13:26:26.266Z',
        end: '2021-09-21T07:40:07.763Z',
    },
    {
        id: '4abce54a-d4bb-44f9-9045-4acf865b30e4',
        begin: '2021-11-20T04:35:22.689Z',
        end: '2022-12-30T20:25:11.597Z',
    },
    {
        id: '4b9c82a5-35b4-4f8b-a712-68c576ba0af3',
        begin: '2021-09-25T13:55:47.264Z',
        end: '2022-07-28T13:04:08.323Z',
    },
    {
        id: '525658dd-70a0-456a-8e4d-2c7c7a8102c5',
        begin: '2022-10-25T04:52:44.292Z',
        end: '2022-11-01T08:06:40.247Z',
    },
    {
        id: '52d1d97d-ad3c-45f9-afb3-4f0d00d6dc5d',
        begin: '2021-02-07T22:34:09.242Z',
        end: '2021-05-25T03:50:40.181Z',
    },
    {
        id: '54853e53-6b23-4026-a29a-4a44c84eaeb5',
        begin: '2022-01-21T15:04:59.779Z',
        end: '2022-03-27T00:22:08.061Z',
    },
    {
        id: '6169b72b-4333-4289-9e5f-36536bcd69b2',
        begin: '2022-07-31T22:52:42.098Z',
        end: '2022-11-16T18:05:40.602Z',
    },
    {
        id: '6228b448-eef1-46f7-a08e-7114b5b93ab2',
        begin: '2021-06-21T04:44:42.932Z',
        end: '2022-07-14T04:48:13.184Z',
    },
    {
        id: '66a1abc7-6ef6-400f-92e3-e5c2093fc404',
        begin: '2022-02-16T12:13:24.696Z',
        end: '2022-11-16T16:12:36.379Z',
    },
    {
        id: '6789add3-1ccd-45a1-9934-5a0f332ce2d7',
        begin: '2021-09-15T16:11:42.768Z',
        end: '2022-09-18T06:02:29.569Z',
    },
    {
        id: '67d55aad-c0a9-4d42-985c-4e5447cbe592',
        begin: '2021-04-13T09:23:55.356Z',
        end: '2021-04-26T02:07:11.749Z',
    },
    {
        id: '70656668-571e-49fa-be2e-099c67d136ab',
        begin: '2022-04-08T16:29:22.128Z',
        end: '2022-06-09T22:10:59.718Z',
    },
    {
        id: '70656668-571e-49fa-be2e-099c67d136ab',
        begin: '2020-07-30T15:05:21.037Z',
        end: '2023-03-03T21:40:14.145Z',
    },
    {
        id: '713257f0-8cf8-41a0-bec4-0a2b0ea00c2f',
        begin: '2021-10-13T22:30:09.178Z',
        end: '2021-12-27T15:22:52.065Z',
    },
    {
        id: '713fac50-2475-4f2e-a49f-cfdc73338b18',
        begin: '2021-10-17T22:23:43.401Z',
        end: '2022-02-18T00:33:02.721Z',
    },
    {
        id: '74e59672-daaa-40a1-b781-9119f7460961',
        begin: '2021-08-28T05:34:32.361Z',
        end: '2022-02-12T00:32:24.636Z',
    },
    {
        id: '75161f52-ea44-4f11-8fb0-977921d5ffa2',
        begin: '2022-05-20T18:33:40.929Z',
        end: '2022-12-29T04:24:51.565Z',
    },
    {
        id: '75e96db4-bba2-4035-8f43-df2cbd3da859',
        begin: '2023-05-11T14:35:15.359Z',
        end: '2023-12-27T11:19:19.393Z',
    },
    {
        id: '75e96db4-bba2-4035-8f43-df2cbd3da859',
        begin: '2021-03-13T23:13:48.815Z',
        end: '2021-04-15T22:11:23.977Z',
    },
    {
        id: '781b9572-895a-4b96-8272-e679856e5776',
        begin: '2022-02-12T01:06:56.851Z',
        end: '2022-05-13T15:25:22.659Z',
    },
    {
        id: '7acb0cd9-4490-4c20-9012-48a9e0a9e3fd',
        begin: '2021-08-31T19:10:00.908Z',
        end: '2021-09-10T15:28:43.818Z',
    },
    {
        id: '84b84e7b-2daf-4558-906b-7e67b053c6fa',
        begin: '2022-02-22T04:54:31.264Z',
        end: '2022-08-22T11:06:16.364Z',
    },
    {
        id: '86b5c819-6a6c-4978-8c51-a2d810bb9318',
        begin: '2022-02-16T07:01:50.149Z',
        end: '2022-10-03T07:46:31.410Z',
    },
    {
        id: '86b5c819-6a6c-4978-8c51-a2d810bb9318',
        begin: '2022-05-09T04:47:25.211Z',
        end: '2022-12-02T18:37:16.039Z',
    },
    {
        id: '86b5c819-6a6c-4978-8c51-a2d810bb9318',
        begin: '2021-10-24T02:46:52.779Z',
        end: '2023-04-25T00:04:34.178Z',
    },
    {
        id: '8728a1ae-f14c-4c18-ad29-9b3136b770f7',
        begin: '2021-04-13T20:04:31.911Z',
        end: '2021-06-09T10:34:54.972Z',
    },
    {
        id: '88f01b9a-b20f-486a-999d-695536c3b46b',
        begin: '2021-04-12T02:24:16.066Z',
        end: '2022-10-11T08:56:08.815Z',
    },
    {
        id: '8aaaf2a4-a632-4437-80c3-5ec22de07dbc',
        begin: '2022-03-24T06:35:38.761Z',
        end: '2022-04-04T01:42:19.962Z',
    },
    {
        id: '8d3e0514-e37e-4a4d-9ee2-48fd0b65dfb8',
        begin: '2021-07-14T22:11:34.150Z',
        end: '2022-03-31T07:43:10.093Z',
    },
    {
        id: '8de70ccc-8ba4-4521-95bc-8a9071c06a0a',
        begin: '2022-10-20T05:33:01.294Z',
        end: '2022-11-01T00:50:23.432Z',
    },
    {
        id: '8e1e8fee-15d9-44a6-9312-6b4c2222415e',
        begin: '2021-11-07T07:36:45.022Z',
        end: '2022-10-06T02:53:07.967Z',
    },
    {
        id: '93127230-8e9c-4ef3-b3f6-529cb02af10a',
        begin: '2022-12-02T03:50:27.210Z',
        end: '2022-12-02T05:26:29.640Z',
    },
    {
        id: '96177976-8a8b-4258-8f16-32b844215521',
        begin: '2021-10-20T01:21:55.401Z',
        end: '2021-10-30T06:38:48.421Z',
    },
    {
        id: '98213eb2-384d-40b3-b9ea-02509e13759d',
        begin: '2022-04-23T23:08:40.948Z',
        end: '2022-06-09T15:56:01.144Z',
    },
    {
        id: '98de6ca4-c281-4761-844e-2661b57b78b1',
        begin: '2021-12-02T00:37:07.384Z',
        end: '2022-11-13T01:17:31.754Z',
    },
    {
        id: '9a8efb9f-7cca-445c-8fb0-197d8344d44c',
        begin: '2021-01-31T15:48:53.148Z',
        end: '2022-01-03T11:34:22.186Z',
    },
    {
        id: '9ae5c85d-b219-4b51-9a29-964647cff757',
        begin: '2022-08-09T23:19:06.537Z',
        end: '2022-09-19T12:15:42.931Z',
    },
    {
        id: '9d8395e3-3102-4e50-94df-273e85c1c9e5',
        begin: '2022-08-16T14:40:15.025Z',
        end: '2022-10-17T05:46:37.312Z',
    },
    {
        id: 'a091ca34-62d8-4965-84a5-6efbece464ec',
        begin: '2021-01-29T08:44:59.135Z',
        end: '2022-08-25T00:44:38.118Z',
    },
    {
        id: 'a5b5bfb9-df3b-4b02-9d7c-2a77515330ec',
        begin: '2022-07-26T10:51:25.229Z',
        end: '2022-12-17T20:15:56.495Z',
    },
    {
        id: 'a6216e79-e0e9-403b-b37e-cb6192ef0c1b',
        begin: '2021-09-26T23:42:10.122Z',
        end: '2022-02-11T13:04:27.606Z',
    },
    {
        id: 'a79fe094-087b-4b1e-ae20-ac4bf7fa429b',
        begin: '2022-02-23T11:33:58.552Z',
        end: '2022-12-16T00:52:16.126Z',
    },
    {
        id: 'a79fe094-087b-4b1e-ae20-ac4bf7fa429b',
        begin: '2020-03-03T23:14:30.832Z',
        end: '2023-12-15T15:12:32.953Z',
    },
    {
        id: 'a98c9961-c21c-488a-924b-0f1648f8d048',
        begin: '2022-10-28T11:22:44.706Z',
        end: '2022-12-25T11:14:36.833Z',
    },
    {
        id: 'a991fe21-ad78-4bb9-9df6-935eaa3c8580',
        begin: '2021-07-10T05:42:06.273Z',
        end: '2022-06-16T02:19:39.891Z',
    },
    {
        id: 'aa3faa48-4e76-42ce-9736-4da63ce6eb76',
        begin: '2022-09-21T11:04:10.137Z',
        end: '2022-12-04T07:05:12.187Z',
    },
    {
        id: 'ab637a38-b21f-470a-b74a-c39115e2b0fa',
        begin: '2021-02-07T18:24:51.801Z',
        end: '2021-05-30T12:45:18.328Z',
    },
    {
        id: 'abee8be3-5577-4834-9b3a-c601f4587d50',
        begin: '2022-11-11T20:24:48.236Z',
        end: '2022-12-12T23:16:31.697Z',
    },
    {
        id: 'b1350e31-54e9-4237-a211-1cf542b6b710',
        begin: '2022-03-14T18:52:10.896Z',
        end: '2022-07-21T23:23:14.056Z',
    },
    {
        id: 'b22b5bef-30a7-4189-a962-5ce287bb8201',
        begin: '2021-01-05T18:07:33.592Z',
        end: '2021-05-09T19:25:30.280Z',
    },
    {
        id: 'b265c033-7040-40f9-a1c5-3d1277ebf6ae',
        begin: '2022-07-10T18:32:41.579Z',
        end: '2022-12-21T23:55:47.184Z',
    },
    {
        id: 'b3a997e7-52b0-414e-b18f-54039789a796',
        begin: '2022-07-15T01:35:01.355Z',
        end: '2022-07-15T08:36:33.781Z',
    },
    {
        id: 'b415e4e4-f1ad-4d45-8ace-467834beb068',
        begin: '2022-10-05T00:34:56.073Z',
        end: '2022-12-06T09:26:12.184Z',
    },
    {
        id: 'bb0ead68-e9de-414b-a5c2-d08ecdd17859',
        begin: '2022-01-19T04:43:09.817Z',
        end: '2022-12-22T09:20:19.017Z',
    },
    {
        id: 'bb858540-c1b9-41f1-8775-1951c4769138',
        begin: '2022-11-22T10:24:17.535Z',
        end: '2022-12-01T06:43:26.226Z',
    },
    {
        id: 'bfb55f0b-1260-4a0a-8856-2f04a2738d9e',
        begin: '2021-01-11T12:14:24.780Z',
        end: '2022-10-28T00:34:12.727Z',
    },
    {
        id: 'c077536d-c8fd-4f59-b992-7083f3304cf1',
        begin: '2021-06-08T13:13:45.001Z',
        end: '2021-08-23T09:26:09.693Z',
    },
    {
        id: 'c0860258-7ff1-463a-aa6e-56f731642986',
        begin: '2022-06-19T23:38:27.580Z',
        end: '2022-12-21T11:24:35.418Z',
    },
    {
        id: 'c59af662-7945-4814-82e5-e61b0c917342',
        begin: '2022-07-13T01:53:57.671Z',
        end: '2022-08-07T13:14:51.048Z',
    },
    {
        id: 'c62b58f6-9db1-4109-bc24-2dbdc2499475',
        begin: '2021-11-09T02:32:28.194Z',
        end: '2022-02-27T00:10:10.260Z',
    },
    {
        id: 'c820f1fe-9a20-4a76-90d7-39ea99c9df51',
        begin: '2022-10-18T02:16:10.209Z',
        end: '2022-10-23T17:56:23.963Z',
    },
    {
        id: 'da851773-fd6f-4c94-a92b-030e743379a5',
        begin: '2022-04-12T12:06:27.475Z',
        end: '2022-11-14T02:14:53.183Z',
    },
    {
        id: 'dadcc631-b203-48a7-87a0-4f6bb3a877a4',
        begin: '2021-02-21T02:04:47.599Z',
        end: '2021-11-16T11:35:07.653Z',
    },
    {
        id: 'df8b574d-aa5b-4799-800b-d277999e556c',
        begin: '2021-12-03T07:24:29.920Z',
        end: '2022-07-10T19:32:40.202Z',
    },
    {
        id: 'e92ebcb1-1171-4771-9258-1ca9a7006c3d',
        begin: '2021-06-30T04:59:34.026Z',
        end: '2022-07-26T01:07:43.836Z',
    },
    {
        id: 'ea69b221-c01a-421b-9166-d55d1a0fdee1',
        begin: '2021-07-04T10:33:04.431Z',
        end: '2022-06-16T15:27:38.504Z',
    },
    {
        id: 'ea832cb4-aa34-48eb-aa23-d633491f5f3e',
        begin: '2022-09-17T11:27:28.018Z',
        end: '2022-12-12T10:54:29.938Z',
    },
    {
        id: 'edd906df-db2e-4955-892f-8c949c2a24e6',
        begin: '2022-02-23T08:28:40.930Z',
        end: '2022-10-03T15:39:53.524Z',
    },
    {
        id: 'f018c81c-87d8-4043-98d3-d2f73adfa1c4',
        begin: '2021-07-07T14:28:15.212Z',
        end: '2022-11-30T17:59:56.749Z',
    },
    {
        id: 'f4307cdb-d63b-4b57-8c19-89517bac3e37',
        begin: '2021-03-17T10:35:55.363Z',
        end: '2022-10-26T12:25:30.975Z',
    },
    {
        id: 'f56dc230-171b-4a68-a8d1-4c842ab58f6c',
        begin: '2021-12-18T15:01:07.110Z',
        end: '2022-07-12T06:21:15.365Z',
    },
    {
        id: 'f999476a-13c4-43ca-a3a7-cdf705886d53',
        begin: '2022-05-05T08:48:41.092Z',
        end: '2022-08-17T09:51:27.861Z',
    },
    {
        id: 'fc8919c9-eb9a-4107-bac5-b52b71087aea',
        begin: '2021-11-20T18:58:18.083Z',
        end: '2022-06-24T06:35:35.886Z',
    },
    {
        id: 'fcc3c034-6cf2-427c-877c-d19966d9b076',
        begin: '2021-07-13T11:56:23.347Z',
        end: '2022-09-29T21:39:18.786Z',
    },
];
