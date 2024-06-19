import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from "../../constants"

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs` } style={{ color: color }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#AA0022",
          tabBarInactiveTintColor: "#555555",
          tabBarStyle: {
            backgroundColor: '#F0F0F0',
            borderTopWidth: 1, 
            borderTopColor: "#232533",
            height: 84,

          }
        }}
      >
        <Tabs.Screen 
          name='attendance'
          options={{
            title: 'Attendance',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.attendance}
                color={color}
                name="Attendance"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='course'
          options={{
            title: 'Course',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.plus}
                color={color}
                name="Course"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout