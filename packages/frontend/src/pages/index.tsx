import React, { useState } from 'react';
import CommonLayout from '../components/common/commonLayout';

export default function Home() {
	return (
		<CommonLayout current={''}>
			<div className="container">
				<div>
					<span>home</span>
				</div>
			</div>
		</CommonLayout>
	);
}
