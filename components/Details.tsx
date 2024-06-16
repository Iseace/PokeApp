import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';

export function Details({ navigation, route }) {
  const [details, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const { url } = route.params;
      if (url) {
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            throw new Error('Error en la petición');
          }
          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [route.params]);

  function handleClick() {
    navigation.navigate('Home');
  }

  if (loading || !details) {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={handleClick} style={styles.mainContainer}>
      <View style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: details?.sprites.front_default }} style={styles.pokemonImage} />
        </View>
        <Text style={styles.detailsTitle}>Pokémon Details</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{details?.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Height:</Text>
            <Text style={styles.value}>{details?.height}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Weight:</Text>
            <Text style={styles.value}>{details?.weight}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000', // Pokémon red background
    padding: 20,
  },
  detailsContainer: {
    backgroundColor: '#FF6347', // Lighter red
    padding: 20,
    width: 300,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  detailsTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pokemonImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: '#FFFFFF',
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#000000',
  },
  imageContainer: {
    alignSelf: "center",
  },
  label: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

