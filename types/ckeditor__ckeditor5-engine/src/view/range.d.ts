import Position from "./position";
import Element from "./element";
import DocumentFragment from "./documentfragment";
import Node from "./node";
import { TreeWalkerDirection, TreeWalkerValue } from "./treewalker";
import { Item } from "./item";

export default class Range implements Iterable<TreeWalkerValue> {
    readonly end: Position;
    isCollapsed: boolean;
    isFlat: boolean;
    root: Element | DocumentFragment;
    readonly start: Position;

    constructor(start: Position, end?: Position);
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    clone(): Range;
    containsPosition(position: Position): boolean;
    containsRange(otherRange: Range, loose?: boolean): boolean;
    getCommonAncestor(): Node | DocumentFragment | null;
    getContainedElement(): Element | null;
    getDifference(otherRange: Range): [] | [Range] | [Range, Range];
    getEnlarged(): Range;
    getIntersection(otherRange: Range): Range | null;
    getItems(options?: {
        boundaries?: Range | undefined;
        startPosition: Position;
        direction?: TreeWalkerDirection | undefined;
        singleCharacters?: boolean | undefined;
        shallow?: boolean | undefined;
        ignoreElementEnd?: boolean | undefined;
    }): Iterable<Item>;
    getPositions(options?: {
        boundaries?: Range | undefined;
        startPosition: Position;
        direction?: TreeWalkerDirection | undefined;
        singleCharacters?: boolean | undefined;
        shallow?: boolean | undefined;
        ignoreElementEnd?: boolean | undefined;
    }): Iterable<Position>;
    getTrimmed(): Range;
    getWalker(options?: {
        startPosition?: Position | undefined;
        singleCharacters?: boolean | undefined;
        shallow?: boolean | undefined;
        ignoreElementEnd?: boolean | undefined;
    }): TreeWalker;
    is(type: string): boolean;
    isEqual(otherRange: Range): boolean;
    isIntersecting(otherRange: Range): boolean;
}
