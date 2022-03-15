import React, { useState } from 'react';
import CommonLayout from '../components/common/commonLayout';

export default function Home() {
	
	const example = (a) => {
		let i = 10;
		return i + a;
		i++;
	}
	
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
