import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from '@components/app';

import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
