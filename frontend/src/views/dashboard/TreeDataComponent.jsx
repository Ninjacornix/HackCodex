import { TreeItem, TreeView } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, width } from "@mui/system";


const TreeDataComponent = ({ setSelectedFolder, data }) => {

    const handleNodeToggle = (event, nodeIds) => {
        const target = event.target;
        console.log(event.target);
        if (!(target.tagName === 'svg' || target.tagName === 'path')) {
            props.onNodeToggle(nodeIds);
        }
    };


    const renderTree = (nodes) => (
        <TreeItem key={nodes.path}
            nodeId={nodes.path}
            label={<Box sx={{ p: 0.7 }} onClick={(e) => { e.stopPropagation(); setSelectedFolder(nodes) }}>{nodes.name}</Box>}
            onClick={() => console.log(nodes.name)}>
            {Array.isArray(nodes.contents) ? nodes.contents.map((node) => (node.type == "folder" ? renderTree(node) : null)) : null}
        </TreeItem >
    );

    return (<TreeView

        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon style={{ width: 20, height: 20 }} />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon
            style={{ width: 20, height: 20 }} />}
        sx={{ height: 220, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
        {renderTree(data)}
    </TreeView>);
}

export default TreeDataComponent;


