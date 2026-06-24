import { createElement, ReactNode, ReactElement, CSSProperties } from "react";
import classNames from "classnames";
import { RenderAsEnum, PagingPositionEnum } from "typings/DynamicMatrixGridProps";

interface TableFrameProps {
    children: ReactNode;
    className: string;
    style?: CSSProperties | undefined;
    columnCount: number;
    renderAs: RenderAsEnum;
    pagingPosition: PagingPositionEnum;
    paging: boolean;
    pagination: ReactNode;
}

export function TableFrame(props: TableFrameProps): ReactElement {
    if (props.renderAs === "grid") {
        const rowStyle = { "--widgets-grid-template-columns": "1fr ".repeat(props.columnCount) } as CSSProperties;
        return (
            <div className={classNames(props.className, "widget-matrix-grid")} style={props.style}>
                <div className="widget-datagrid-top-bar table-header matrix-grid-toolbar">
                    <div className="matrix-grid-toolbar-title">dynamic-matrix-grid</div>
                    <div className="matrix-grid-toolbar-actions">
                        {props.paging &&
                            (props.pagingPosition === "top" || props.pagingPosition === "both") &&
                            props.pagination}
                    </div>
                </div>
                <div className="widget-datagrid-content">
                    <div className="widget-datagrid-grid table" role="grid" style={rowStyle}>
                        {props.children}
                    </div>
                </div>
                <div className="widget-datagrid-footer table-footer matrix-grid-footer">
                    {props.paging &&
                        (props.pagingPosition === "bottom" || props.pagingPosition === "both") &&
                        props.pagination}
                </div>
            </div>
        );
    }
    return (
        <div
            className={classNames(props.className, "widget-matrix-grid matrix-grid-table-wrapper")}
            style={props.style}
        >
            <div className="matrix-grid-toolbar">
                <div className="matrix-grid-toolbar-title">dynamic-matrix-grid</div>
                <div className="matrix-grid-toolbar-actions">
                    {props.paging &&
                        (props.pagingPosition === "top" || props.pagingPosition === "both") &&
                        props.pagination}
                </div>
            </div>
            <table>{props.children}</table>
            <div className="matrix-grid-footer">
                {props.paging &&
                    (props.pagingPosition === "bottom" || props.pagingPosition === "both") &&
                    props.pagination}
            </div>
        </div>
    );
}
