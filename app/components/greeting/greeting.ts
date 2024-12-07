import { NavigatedData, Page } from '@nativescript/core';
import { GreetingViewModel } from './greeting-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new GreetingViewModel();
}