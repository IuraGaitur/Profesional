import parse5 from 'parse5';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HtmlText extends Component {

    parse(html) {
        let fragment = parse5.parseFragment(html)
        return fragment
    }

    render() {
        let html = this.props.html;
        let fragment = this.parse(html);
        let rootKey = 'ht_';
        let itemStyle = this.props.textStyle;

        let children = [];
        fragment.childNodes.forEach((node, index) => {
            children.push(processNode(itemStyle, node, `${rootKey}_${index}`))
        });

        return (
            <View style={this.props.styles}>
                {children}
            </View>
        )
    }
}



HtmlText.propTypes = {
    html: PropTypes.string,
    styles: PropTypes.object,
    textStyle: PropTypes.object
};

HtmlText.defaultProps = {
    styles: {
        flexWrap: 'wrap',
    },
    textStyle: {
        fontSize: 21
    }
};

const BLOCK_ELEMENTS = ['blockquote', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'ol', 'p', 'pre', 'ul', 'li']

const INLINE_ELEMENTS = ['b', 'i', 'em', 'strong', 'a', 'br', 'q', 'span', 'sub', 'sup']

const DEFAULT_STYLES = StyleSheet.create({
    a: {},
    b: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 24,
    },
    blockquote: {
        paddingLeft: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#cccccc',
        marginBottom: 12
    },
    br: {},
    div: {},
    em: {
        fontStyle: 'italic'
    },
    h1: {
        fontWeight: 'bold',
    },
    h2: {
        fontWeight: 'bold',
    },
    h3: {
        fontWeight: 'bold',
    },
    h4: {
        fontWeight: 'bold',
    },
    h5: {
        fontWeight: 'bold',
    },
    h6: {
        fontWeight: 'bold',
    },
    i: {
        fontStyle: 'italic'
    },
    p: {
        marginBottom: 0,
    },
    pre: {},
    strong: {
        fontWeight: 'bold'
    },
    q: {},
    span: {},
    sub: {},
    sup: {},
    ol: {
        marginLeft: 24,
    },
    ul: {
        marginLeft: 24,
    },
    default: {fontSize: 22}
});


function isText(tagName) {
    return tagName === '#text'
}

function isBlockElement(tagName) {
    return BLOCK_ELEMENTS.indexOf(tagName) != -1
}

function isInlineElement(tagName) {
    return INLINE_ELEMENTS.indexOf(tagName) != -1
}

function styleForTag(additionalStyle, tagName) {
    var style = DEFAULT_STYLES[tagName] ? DEFAULT_STYLES[tagName] : DEFAULT_STYLES['default'];
    var result = [style, additionalStyle];
    return result;
}

function processNode(styles, node, parentKey) {
    var nodeName = node.nodeName;

    if (isText(nodeName)) {
        var key = `${parentKey}_text`;
        return (<Text key={key} style={styles}>{node.value}</Text>)
    }

    if (isInlineElement(nodeName)) {
        var key = `${parentKey}_${nodeName}`;
        var children = [];
        node.childNodes.forEach((child, index) => {
            if (isInlineElement(child.nodeName) || isText(child.nodeName)) {
                children.push(processNode(styles, child, `${key}_${index}`))
            } else {
                console.error(`Inline element ${nodeName} can only have inline children, ${child} is invalid!`)
            }
        });
        return (<Text key={key} style={styleForTag(styles, nodeName)}>{children}</Text>)
    }

    if (isBlockElement(nodeName)) {
        var key = `${parentKey}_${nodeName}`;
        var children = [];
        var lastInlineNodes = [];

        node.childNodes.forEach((childNode, index) => {
            var child = processNode(styles, childNode, `${key}_${index}`);
            if (isInlineElement(childNode.nodeName) || isText(childNode.nodeName)) {
                lastInlineNodes.push(child)

            } else if (isBlockElement(childNode.nodeName)) {
                if (lastInlineNodes.length > 0) {
                    children.push(<Text key={`${key}_${index}_inline`}>{lastInlineNodes}</Text>);
                    lastInlineNodes = []
                }
                children.push(child)
            }
        });

        if (lastInlineNodes.length > 0) {
            children.push((<Text key={`${key}_last_inline`}>{lastInlineNodes}</Text>))
        }
        return (
            <View key={key}>
                {children}
            </View>
        )
    }

    console.warn(`unsupported node: ${nodeName}`)
    return null;
}
