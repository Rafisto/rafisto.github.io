import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { QueryJSON } from "../../api/data/queryJSONServer";
import Data from "../../api/data/Data";
import T from "../../localization/T";

interface DailyAvailability {
    start: string;
    end: string;
}

type DayAvailability = DailyAvailability | 'unavailable';

interface ScheduleData {
    monday: DayAvailability;
    tuesday: DayAvailability;
    wednesday: DayAvailability;
    thursday: DayAvailability;
    friday: DayAvailability;
    saturday: DayAvailability;
    sunday: DayAvailability;
}

const Availability = () => {
    const { data } = QueryJSON({ queryUrl: Data.fetchAvailability });
    return (
        <div>
            <Typography sx={{ textAlign: "center", padding: "20px" }} variant="h4">{T("toolbar.availability")}</Typography>
            {data &&
                <List style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:"column" }}>
                    {Object.entries(data).map(([day, availability]) => (
                        <ListItem key={day}>
                            <ListItemText sx={{textAlign:"center"}}
                                primary={
                                    <>
                                        <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{' '}
                                        {typeof availability === 'string' ? (
                                            <span>{availability}</span>
                                        ) : (
                                            <span>
                                                {`Start: ${(availability as DailyAvailability).start}, End: ${(availability as DailyAvailability).end}`}
                                            </span>
                                        )}
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>}
        </div>
    )
}

export default Availability;