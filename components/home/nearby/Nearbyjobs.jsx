import React from 'react'
import styles from './nearbyjobs.style'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { COLORS } from '../../../constants'
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router'
const Nearbyjobs = () => { 
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search',{
    query: 'Node.js developer in New-York,USA',
    num_page: 1

  })
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text  style={styles.headerTitle}>Nearby jobs</Text>
          <TouchableOpacity >
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
      </View>
       <View style={styles.cardsContainer}>
          {isLoading? (
            <ActivityIndicator  size='large' colors={COLORS.primary}/>
          ): error ? (
            <Text>Something went wrong</Text>
          ): (
            data?.map((job)=>(<NearbyJobCard
            job={job}
             key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}>
            </NearbyJobCard>))
          )}
        </View>
    </View>
  )
}

export default Nearbyjobs;