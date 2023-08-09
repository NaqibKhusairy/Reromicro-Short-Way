let sensordetected = 0
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        sensordetected += 1
        if (sensordetected == 1) {
            reromicro.Brake()
            basic.pause(300)
            reromicro.MoveForward(47)
            basic.pause(20)
            reromicro.RunMotor(Motors.Right, -47)
            reromicro.RunMotor(Motors.Left, 47)
            basic.pause(200)
            reromicro.Brake()
            basic.pause(200)
        } else if (sensordetected == 2) {
            reromicro.Brake()
            basic.pause(300)
            reromicro.MoveForward(47)
            basic.pause(300)
        } else if (sensordetected == 3) {
            reromicro.Brake()
            basic.pause(300)
            reromicro.MoveForward(47)
            basic.pause(200)
        } else if (sensordetected == 4) {
            reromicro.Brake()
            basic.pause(200)
            reromicro.RunMotor(Motors.Right, -47)
            reromicro.RunMotor(Motors.Left, 47)
            basic.pause(200)
            reromicro.Brake()
            basic.pause(200)
        } else if (sensordetected == 5) {
            reromicro.Brake()
        }
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 32)
        reromicro.RunMotor(Motors.Right, 47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 47)
        reromicro.RunMotor(Motors.Right, 32)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 0)
        reromicro.RunMotor(Motors.Right, 47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Right, 0)
        reromicro.RunMotor(Motors.Left, 47)
    }
})
