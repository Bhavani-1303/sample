import React from 'react';
import { Container, Card, CardHeader, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Box, Grid } from '@mui/material';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

function EmergencyContact() {
  const employee = {
    name: "Jane Doe",
    id: "EMP12345",
    department: "Engineering"
  };

  const contacts = [
    { name: "Emergency Hotline", detail: "123-456-7890", icon: <PhoneIcon /> },
    { name: "Security Desk", detail: "987-654-3210", icon: <SecurityIcon /> },
    { name: "Local Police", detail: "911 (or relevant local number)", icon: <LocalPoliceIcon /> },
    { name: "Fire Department", detail: "911 (or relevant local number)", icon: <FireExtinguisherIcon /> }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <ContactEmergencyIcon />
            </Avatar>
          }
          titleTypographyProps={{ variant: 'h4', component: 'h1' }} // Make title h1 for accessibility
          title="Emergency Contact Information"
          sx={{ bgcolor: 'grey.200' }}
        />
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" component="div" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
              Employee Details
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: 'primary.main' }}><PersonPinCircleIcon /></ListItemIcon>
                <ListItemText primary={employee.name} secondary="Name" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'primary.main' }}><BadgeIcon /></ListItemIcon>
                <ListItemText primary={employee.id} secondary="Employee ID" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'primary.main' }}><BusinessIcon /></ListItemIcon>
                <ListItemText primary={employee.department} secondary="Department" />
              </ListItem>
            </List>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Box>
            <Typography variant="h5" component="div" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
              Emergency Contacts
            </Typography>
            <List>
              {contacts.map((contact, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {React.cloneElement(contact.icon, { color: "inherit" })} {/* Inherit color from ListItemIcon */}
                  </ListItemIcon>
                  <ListItemText primary={contact.detail} secondary={contact.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default EmergencyContact;
