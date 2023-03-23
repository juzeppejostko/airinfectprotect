<?php

$baseUrl = 'https://pharmamixt.amocrm.ru';
$accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYzgyODViMjM1OWZlMzBiZjNlZWIwMWExODE0M2U1YzMxMjRmMzkxOTc0Y2E2NWYzODZjNDFlNjZiODY4MDE4NmI1ZDQxZGRkYWZlYTlmIn0.eyJhdWQiOiIzMDhhOTM0OC01NTQ2LTQxNDgtYjE2YS04NmIyNmE5NGFmODMiLCJqdGkiOiIyYmM4Mjg1YjIzNTlmZTMwYmYzZWViMDFhMTgxNDNlNWMzMTI0ZjM5MTk3NGNhNjVmMzg2YzQxZTY2Yjg2ODAxODZiNWQ0MWRkZGFmZWE5ZiIsImlhdCI6MTY2MDM3MDc4NiwibmJmIjoxNjYwMzcwNzg2LCJleHAiOjE2NjA0NTcxODYsInN1YiI6IjExNzUxNjMiLCJhY2NvdW50X2lkIjoxMjk2NzA5Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImNybSIsIm5vdGlmaWNhdGlvbnMiXX0.hz2upkJmyB7O1UABReHYf4nlD6btILym6m16Bzm1QVjfsIQDJUjScXcyw1tr9Nyg-bulKnAno41wstREAA-cOBF99071Tce8ws6LzmYANfv-VqWWFKH3_Qi4xjz4WfXrbGEeO7wgn1h6jjoLE4ilT61QNONVWoMq6wSZ_BYsiM1huHBfFeinmzZUJ5JFlE1qR7CiFD50T4SCE6k8fb97zCVsQ7HlTTcyw_UfJfynmU_TDvxgbXsvnPyrH5jfaMtQiqF40t0IzY3z6hdb_3s8udApbbdNMu6o33_4yu_-NJsfQEFG8u07kYxa-XhpqO-sNCG2spEN47DKBEgv2fedvg';
$curlOptions = [
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $accessToken
    ]
];
$curlHandler = curl_init();
curl_setopt_array($curlHandler, $curlOptions);

// Create lead
$postFields = [
    [
        'pipeline_id' => 4953280,
        '_embedded' => [
            'contacts' => [
                [
                    'first_name' => trim($_POST['first_name']),
                    'custom_fields_values' => [
                        [
                            'field_id' => 1566040, # Phone
                            'values' => [
                                [
                                    'enum_id' => 3711606,
                                    'value' => trim($_POST['phone'])
                                ]
                            ]
                        ],
                        [
                            'field_id' => 1566042, # Email
                            'values' => [
                                [
                                    'enum_id' => 3711616,
                                    'value' => trim($_POST['email'])
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
curl_setopt($curlHandler, CURLOPT_URL, $baseUrl . '/api/v4/leads/complex');
curl_setopt($curlHandler, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curlHandler, CURLOPT_POSTFIELDS, json_encode($postFields));

$data = curl_exec($curlHandler);
$data = json_decode($data, true);

file_put_contents(__DIR__ . '/amo.log', print_r($postFields, true) . "\n" . print_r($data, true), FILE_APPEND);

$leadId = $data[0]['id'] ?? null;

// Add note
if ($leadId) {
    $postFields = [
        [
            'note_type' => 'common',
            'params' => [
                'text' => 'Не звонить. Только смс или мессенджеры - ' . (! empty($_POST['can_call']) ? 'ВЫБРАНО' : 'НЕ ВЫБРАНО')
            ]
        ]
    ];
    curl_setopt($curlHandler, CURLOPT_URL, $baseUrl . '/api/v4/leads/' . $leadId . '/notes');
    curl_setopt($curlHandler, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($curlHandler, CURLOPT_POSTFIELDS, json_encode($postFields));

    $data = curl_exec($curlHandler);
    $data = json_decode($data, true);
}

// Curl close
curl_close($curlHandler);
