import React, { useState } from 'react';

export default function Home() {
	const [text, setText] = useState<string>('ts');

	const onClick = () => {
		console.log('aaa');
	};

	return (
		<div className="container">
			<div>
				<span>{text} 적용 완료</span>
			</div>
		</div>
	);
}
