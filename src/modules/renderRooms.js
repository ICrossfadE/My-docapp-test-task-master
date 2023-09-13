export function renderRooms(array, constructor, htmElement) {
  array.forEach((item) => {
    new constructor(
      item.code,
      item.appointment.code,
      item.appointment.first_name,
      item.appointment.last_name,
      item.appointment.gender,
      item.appointment.birthday ? item.appointment.birthday : "",
      item.status.code,
      item.status.title,
      item.appointment.start_date,
      item.appointment.start_time,
      item.appointment.doctor_title,
      item.appointment.assistant,
      item.appointment.is_doctor ? item.appointment.is_doctor : false,
      item.appointment.vital_signs.height_ft,
      item.appointment.vital_signs.height_in,
      item.appointment.vital_signs.weight,
      item.appointment.vital_signs.bmi,
      item.update_time,
      htmElement
    ).render();
  });
}
