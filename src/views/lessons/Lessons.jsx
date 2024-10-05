import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import CollapsibleTable from "../../components/tables/CollapsiobleTable";
import { columns, expandedColumns } from "./constants/LessonsConstants";
import { useLessons } from "./hooks/useLessons";

const Lessons = () => {
  const { lessons, handleNavigate } = useLessons();

  return (
    <Box sx={{ m: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Lecciones
          </Typography>
          <Divider />
          <CollapsibleTable
            data={lessons}
            columns={columns}
            expandedColumns={expandedColumns}
            onNavigate={handleNavigate}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Lessons;
