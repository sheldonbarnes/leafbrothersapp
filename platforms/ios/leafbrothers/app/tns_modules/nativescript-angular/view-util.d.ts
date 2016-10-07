import { View } from "ui/core/view";
import { ContentView } from 'ui/content-view';
import { LayoutBase } from 'ui/layouts/layout-base';
import { ViewExtensions, NgView } from './element-registry';
import { Device } from "platform";
export declare type ViewExtensions = ViewExtensions;
export declare type NgView = NgView;
export declare type NgLayoutBase = LayoutBase & ViewExtensions;
export declare type NgContentView = ContentView & ViewExtensions;
export declare type BeforeAttachAction = (view: View) => void;
export declare function isView(view: any): view is NgView;
export declare function isLayout(view: any): view is NgLayoutBase;
export declare function isContentView(view: any): view is NgContentView;
export declare class ViewUtil {
    private isIos;
    private isAndroid;
    constructor(device: Device);
    insertChild(parent: any, child: NgView, atIndex?: number): void;
    removeChild(parent: any, child: NgView): void;
    getChildIndex(parent: any, child: NgView): any;
    private createAndAttach(name, viewClass, parent, beforeAttach?);
    createView(name: string, parent: NgView, beforeAttach?: BeforeAttachAction): NgView;
    createText(value: string): NgView;
    createViewContainer(name: string, parentElement: NgView, beforeAttach: BeforeAttachAction): View & ViewExtensions;
    createTemplateAnchor(parentElement: NgView): View & ViewExtensions;
    private isXMLAttribute(name);
    private platformFilter(attribute);
    setProperty(view: NgView, attributeName: string, value: any): void;
    private setPropertyInternal(view, attributeName, value);
    private convertValue(value);
    private getProperties(instance);
    private cssClasses(view);
    addClass(view: NgView, className: string): void;
    removeClass(view: NgView, className: string): void;
    private setClasses(view, classesValue);
    private syncClasses(view);
    private resolveCssValue(styleValue);
    private setStyleValue(view, property, value);
    setStyleProperty(view: NgView, styleName: string, styleValue: string): void;
}