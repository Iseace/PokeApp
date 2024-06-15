import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card } from './Card';
import React from 'react';

export function Home({ navigation }) {
    const pageLimit = 151;
    const [limit, setLimit] = useState(pageLimit);
    const [offset, setOffset] = useState(0);

    const { list, loading, error } = useFetch(limit, offset);

    useEffect(() => {
        console.log(list, loading, error?.message);
    }, [loading]);

    return (
      
        <ScrollView>
          <View style={styles.view}>
            {list.map((element) => (
                <Card key={element.id} data={element} navigation={navigation} />
            ))}
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: 6,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignContent: "center"
    },
});
