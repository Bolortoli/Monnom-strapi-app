module.exports = ({ env }) => {
	const isAws = env('AWS_ACCESS_KEY_ID');
	return {
		upload: isAws ? ({
			// upload to aws
			provider: 'aws-s3',
			providerOptions: {
				accessKeyId: env('AWS_ACCESS_KEY_ID'),
				secretAccessKey: env('AWS_ACCESS_SECRET'),
				region: env('AWS_REGION'),
				params: {
					Bucket: env('AWS_BUCKET'),
				},
			},
		}) : ({
			// upload to local storage
			providerOptions: {
				localServer: {
					maxage: 300000,
				},
			},
		})
	}
};
