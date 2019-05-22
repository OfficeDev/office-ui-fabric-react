import { createDemoApp } from '@uifabric/example-app-base';
import { AppDefinition } from './AppDefinition';
import { GettingStartedPage } from './GettingStartedPage';
import { initializeFileTypeIcons } from '@uifabric/file-type-icons';
import { initializeFolderCovers } from '@uifabric/experiments';

initializeFileTypeIcons();
initializeFolderCovers();

createDemoApp(AppDefinition, GettingStartedPage);
