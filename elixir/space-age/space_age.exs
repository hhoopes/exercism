defmodule SpaceAge do
  @type planet :: :mercury | :venus | :earth | :mars | :jupiter
                | :saturn | :uranus | :neptune

  @doc """
  Return the number of years a person that has lived for 'seconds' seconds is
  aged on 'planet'.
  """
  @spec age_on(planet, pos_integer) :: float

  @planet_periods %{
    :earth => 1,
    :mercury => 0.2408467,
    :venus => 0.61519726,
    :mars => 1.8808158,
    :jupiter => 11.862615,
    :saturn => 29.447498,
    :uranus => 84.016846,
    :neptune => 164.79132
  }

  def earth_year_seconds, do: 365.25 * 24 * 3600

  def age_on(planet, seconds) do
    @planet_periods[planet] |> second_to_year_conversion(seconds)   
  end

  defp second_to_year_conversion(factor, seconds) do
    seconds / (earth_year_seconds * factor)
  end
end
